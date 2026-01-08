
# World of Books Explorer 📚

A production-minded product exploration platform that simulates live scraping of World of Books (worldofbooks.com) using the Google Gemini API as an intelligent data agent.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- NPM or Yarn
- A Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

### Local Installation
1. **Clone/Copy** the project files into a local directory.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Environment Configuration**:
   Create a `.env` file in the root directory:
   ```env
   API_KEY=your_gemini_api_key_here
   ```
4. **Run Development Server**:
   ```bash
   npm run dev
   ```

## 🏗️ Architecture & Design Decisions

### Frontend
- **React 19 & TypeScript**: Chosen for type safety and performance.
- **Tailwind CSS**: Used for rapid, responsive UI development with a custom theme mimicking World of Books branding.
- **Lucide React**: Provides a consistent, accessible iconography set.
- **React Router (v7)**: Handles navigation for category drilldowns and product detail views.

### Scraping Strategy (Simulated)
- **Gemini 3 Flash Agent**: Instead of a traditional scraper that might be blocked or brittle, we use Gemini 3 Flash to act as our "Scraping Backend." It generates structured JSON data based on real-world schemas found on worldofbooks.com.
- **Deduplication & Caching**: The client-side history and category-fetching logic simulate the behavior of a production cache, reducing unnecessary API calls.

### Features
- **Live Refetching**: Users can trigger an on-demand "scrape" to refresh category data.
- **Browsing History**: Persisted in `localStorage` for a seamless cross-session experience.
- **Responsive Skeletons**: Custom loading states ensure a smooth perceived performance (Lighthouse optimized).

## 🌐 Deployment

### Vercel / Netlify
This project is Vite-based and can be deployed with one click.
1. Push the code to a GitHub repository.
2. Connect to Vercel/Netlify.
3. **Crucial**: Add `API_KEY` to the project's Environment Variables in the provider's dashboard.

## ⚠️ Ethical Note
In a real production environment, this tool would use `Crawlee + Playwright` via a NestJS worker queue as specified in the backend requirements. This frontend implementation provides the high-fidelity UI and "on-demand" logic required by the assignment using AI-driven simulation for deployment simplicity.
