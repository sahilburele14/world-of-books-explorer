📚 World of Books Explorer
Production-minded book discovery app powered by Gemini AI and Vite.  
Explore over 7 million used books across categories like Fiction, Non-Fiction, Children’s, and Rare Books — all styled with Tailwind and routed dynamically.

🔗 Live Demo
Platform	Link
GitHub Pages	View on GitHub Pages
Vercel --> https://world-of-books-explorer.vercel.app/
⚙️ Tech Stack
https://img.shields.io/badge/React-19.0-blue?logo=react
https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript
https://img.shields.io/badge/Vite-6.0-purple?logo=vite
https://img.shields.io/badge/TailwindCSS-3.4-teal?logo=tailwindcss
https://img.shields.io/badge/Gemini-Google%20GenAI-yellow?logo=google
https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel

📦 Features
🔍 Category-based book browsing: Fiction, Non-Fiction, Children’s, Rare Books

🧠 Gemini-powered scraping: Real-time product generation via Google GenAI

🧪 Mock fallback: Reliable mock data when API key is missing

🛠️ Responsive UI: Tailwind CSS + Lucide icons

🔄 Dynamic routing: React Router with HashRouter for GitHub Pages

🌍 Dual deployment: GitHub Pages + Vercel

🚀 Setup Instructions
1. Clone the repo
bash
git clone https://github.com/sahilburele14/world-of-books-explorer.git
cd world-of-books-explorer
2. Install dependencies
bash
npm install
3. Add environment variable
Create .env.local:

env
VITE_GEMINI_API_KEY=your_actual_key_here
4. Run locally
bash
npm run dev
🌐 Deployment
GitHub Pages
Uses HashRouter for routing

Set vite.config.ts:

ts
base: '/world-of-books-explorer/'
Add to package.json:

json
"homepage": "https://sahilburele14.github.io/world-of-books-explorer",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
Deploy:

bash
npm run deploy
Vercel
Push repo to GitHub

Import to vercel.com

Add VITE_GEMINI_API_KEY in project settings

Vercel auto-detects Vite → click Deploy

🧪 Gemini Test Script
Run this to verify Gemini responses before deploy:

bash
npx ts-node testGemini.ts
📁 Folder Structure
Code
src/
├── components/       → Reusable UI components
├── pages/            → Route-based views
├── services/         → Gemini API integration
├── App.tsx           → Main router
├── index.tsx         → Entry point
├── constants.tsx     → Category metadata
├── vite-env.d.ts     → Env typing
🙋‍♂️ Author
Sahil Burele  
Full Stack Developer | Nagpur, India
Connect on LinkedIn (linkedin.com in Bing)
