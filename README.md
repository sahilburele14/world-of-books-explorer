# 📚 World of Books Explorer

A **production‑ready book discovery app** powered by **Google Gemini AI** and **Vite**.  
Explore over **7 million used books** across categories like **Fiction, Non‑Fiction, Children’s, and Rare Books** — all styled with **TailwindCSS** and deployed seamlessly on **Vercel** and **GitHub Pages**.

🔗 **Live Demo:**   https://world-of-books-explorer.vercel.app/

---

## 🚀 Tech Stack

- ![React](https://img.shields.io/badge/React-19.0-blue?logo=react)  
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)  
- ![Vite](https://img.shields.io/badge/Vite-6.0-purple?logo=vite)  
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-teal?logo=tailwindcss)  
- ![Gemini](https://img.shields.io/badge/Gemini-Google%20GenAI-yellow?logo=google)  
- ![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)  

---

## ✨ Features

- 🔍 **Category-based browsing**: Fiction, Non-Fiction, Children’s, Rare Books  
- 🧠 **Gemini-powered scraping**: Real-time product generation via Google GenAI  
- 🛠 **Mock fallback**: Reliable mock data when API key is missing  
- 🎨 **Responsive UI**: TailwindCSS + Lucide icons  
- 🔄 **Dynamic routing**: React Router with HashRouter for GitHub Pages  
- 🌍 **Dual deployment**: GitHub Pages + Vercel  

---

## ⚙️ Setup Instructions

 **Clone the repo**

   git clone https://github.com/sahilburele14/world-of-books-explorer.git
   cd world-of-books-explorer
   Install dependencies

bash
npm install
Add environment variable
Create .env.local:

env
VITE_GEMINI_API_KEY=your_actual_key_here
Run locally

bash
npm run dev
🌐 Deployment
GitHub Pages
Uses HashRouter for routing

Update vite.config.ts:

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


📂 Folder Structure

src/
 ├── components/   → Reusable UI components
 ├── pages/        → Route-based views
 ├── services/     → Gemini API integration
 ├── App.tsx       → Main router
 ├── index.tsx     → Entry point
 ├── constants.tsx → Category metadata
 └── vite-env.d.ts → Env typing


👨‍💻 Author
Sahil Burele  
Full Stack Developer | Nagpur, India

Live link: https://world-of-books-explorer.vercel.app/

💼 LinkedIn - https://www.linkedin.com/in/burelesahil/

📧 sahilburele6789@gmail.com

⭐ Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a PR.

📜 License
This project is licensed under the MIT License.

This version is **structured, professional, and recruiter‑friendly**. It emphasizes your **Gemini AI integration, dual deployment, and clean folder structure**, while also giving clear setup instructions.  

Screenshot
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9ce2e5ed-6b16-4f6c-a14f-6e2f66a8a953" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e7c62344-7d5e-413d-8f88-392d96a52da7" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bee94fff-f737-4875-9e29-f7683af25b23" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d37e39f3-7ef6-4767-90f8-860e016b4375" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c340fa57-e252-4714-8bfe-f5243826bb79" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/92916797-42ea-40dd-8ba2-10f0817f4235" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/26bc8b4f-50ee-410e-81c1-512ba5fc414d" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/92052fd4-b306-45ed-b02e-150a8aeedcfb" />

