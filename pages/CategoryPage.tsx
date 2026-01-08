import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { geminiService } from "../services/geminiService";
import type { Product } from "../types";

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    if (!slug) return;
    setStatus("loading");
    setError(null);

    try {
      const data = await geminiService.scrapeProducts(slug);
      if (Array.isArray(data) && data.length > 0) {
        setProducts(data);
        setStatus("success");
      } else {
        setProducts([]);
        setStatus("error");
        setError("No products found for this category.");
      }
    } catch (e: any) {
      setStatus("error");
      setError(e?.message || "Failed to fetch products.");
    }
  }, [slug]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold capitalize">Category: {slug}</h1>
        <button
          onClick={fetchProducts}
          className="bg-[#f37021] text-white px-4 py-2 rounded-lg hover:bg-[#d95f1a] transition-colors"
        >
          Retry Scraping
        </button>
      </div>

      {status === "loading" && (
        <div className="text-slate-600">Loading products…</div>
      )}

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
          <p className="font-semibold">Something went wrong</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      )}

      {status === "success" && products.length === 0 && (
        <div className="text-slate-600">No products found.</div>
      )}

      {status === "success" && products.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={p.imageUrl}
                alt={p.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{p.author}</p>
                <p className="text-[#004a99] font-bold mt-2">
                  {p.currency}{p.price?.toFixed?.(2) ?? p.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
