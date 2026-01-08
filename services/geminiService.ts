import { GoogleGenAI, Type } from "@google/genai";
import { Product, ProductDetail } from "../types";

// ✅ Use Vite-compatible env variable
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize Gemini client only if API key exists
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// Mock fallback data generator
const mockProducts = (slug: string): Product[] => {
  return Array.from({ length: 8 }).map((_, i) => ({
    id: `${slug}-${i + 1}`,
    sourceId: `mock-${i + 1}`,
    title: `${slug.replace("-", " ")} Book ${i + 1}`,
    author: `Author ${i + 1}`,
    price: 6 + i,
    currency: "£",
    imageUrl: `https://picsum.photos/seed/${slug}-${i}/400/300`,
    sourceUrl: `https://www.worldofbooks.com/en-gb/category/${slug}`,
    lastScrapedAt: new Date().toISOString(),
  }));
};

export const geminiService = {
  async scrapeProducts(categorySlug: string): Promise<Product[]> {
    if (!ai) {
      console.warn("⚠️ Gemini API key missing — using mock data.");
      return mockProducts(categorySlug);
    }

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate 12 realistic product cards for category "${categorySlug}"`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                sourceId: { type: Type.STRING },
                title: { type: Type.STRING },
                author: { type: Type.STRING },
                price: { type: Type.NUMBER },
                currency: { type: Type.STRING },
                imageUrl: { type: Type.STRING },
                sourceUrl: { type: Type.STRING },
              },
              required: ["id", "title", "author", "price", "currency", "imageUrl", "sourceUrl"],
            },
          },
        },
      });

      const raw = await response.text();
      const data = JSON.parse(raw);
      return data.map((p: any) => ({
        ...p,
        lastScrapedAt: new Date().toISOString(),
      }));
    } catch (e) {
      console.error("❌ Failed to fetch Gemini products:", e);
      return mockProducts(categorySlug);
    }
  },

  async scrapeProductDetail(productId: string): Promise<ProductDetail> {
    if (!ai) {
      console.warn("⚠️ Gemini API key missing — returning mock product detail.");
      return {
        id: productId,
        sourceId: "mock-detail",
        title: `Mock Book ${productId}`,
        author: "Mock Author",
        price: 9.99,
        currency: "£",
        imageUrl: `https://picsum.photos/seed/${productId}/400/300`,
        sourceUrl: `https://www.worldofbooks.com/en-gb/products/${productId}`,
        description: "This is a mock description for testing.",
        specs: {
          ISBN: "1234567890",
          Publisher: "Mock Publisher",
          Date: "2026",
          Format: "Paperback",
        },
        ratingsAvg: 4.2,
        reviewsCount: 5,
        reviews: [
          { id: "1", author: "Alice", rating: 5, text: "Loved it!", createdAt: new Date().toISOString() },
          { id: "2", author: "Bob", rating: 4, text: "Great read.", createdAt: new Date().toISOString() },
        ],
        recommendations: mockProducts("related").slice(0, 3),
        lastScrapedAt: new Date().toISOString(),
      };
    }

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate detailed product info for book ID ${productId}`,
        config: { responseMimeType: "application/json" },
      });

      const raw = await response.text();
      const data = JSON.parse(raw);
      return {
        ...data,
        currency: "£",
        lastScrapedAt: new Date().toISOString(),
        sourceUrl: `https://www.worldofbooks.com/en-gb/products/${data.id}`,
      };
    } catch (e) {
      console.error("❌ Failed to fetch Gemini product detail:", e);
      throw new Error("Failed to fetch product detail");
    }
  },
};
