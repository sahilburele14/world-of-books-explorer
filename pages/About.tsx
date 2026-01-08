
import React from 'react';
import { Shield, Leaf, Book, Code, Database, Search } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Reinventing Book Discovery
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
          World of Books Explorer is a production-minded demonstration of modern web scraping, 
          real-time data processing, and highly responsive frontend architecture.
        </p>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { icon: Search, title: "On-Demand Scraping", desc: "Our engine triggers real-time data extraction from World of Books to ensure availability and pricing are always fresh." },
          { icon: Database, title: "Robust Persistence", desc: "A structured PostgreSQL backend stores categories, products, and user browsing history with high performance indexes." },
          { icon: Code, title: "Modern Tech Stack", desc: "Built using Next.js, NestJS, and Playwright. The UI leverages Tailwind CSS for professional, mobile-first design." },
          { icon: Shield, title: "Ethical Extractions", desc: "We implement rate limiting, exponential backoff, and respecting robots.txt to ensure minimal impact on the source." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-[#f37021]/10 rounded-xl flex items-center justify-center text-[#f37021]">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Technical Summary */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 space-y-8">
        <h2 className="text-3xl font-bold text-[#f37021]">System Architecture</h2>
        <div className="space-y-6">
            <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-2 rounded-lg mt-1"><Book className="w-5 h-5 text-white" /></div>
                <div>
                    <h4 className="font-bold text-lg">Frontend: Next.js + React 18</h4>
                    <p className="text-slate-400">SSR components for SEO, SWR for client-side hydration, and Tailwind for atomic styling.</p>
                </div>
            </div>
            <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-2 rounded-lg mt-1"><Code className="w-5 h-5 text-white" /></div>
                <div>
                    <h4 className="font-bold text-lg">Backend: NestJS API</h4>
                    <p className="text-slate-400">A modular architecture handling scrape queues, deduplication logic, and JWT-based security.</p>
                </div>
            </div>
            <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-2 rounded-lg mt-1"><Database className="w-5 h-5 text-white" /></div>
                <div>
                    <h4 className="font-bold text-lg">Scraper: Crawlee + Playwright</h4>
                    <p className="text-slate-400">Headless browser automation to navigate World of Books, extract nested metadata, and handle dynamic content.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Mission */}
      <section className="text-center space-y-6 bg-[#004a99] text-white p-12 rounded-3xl">
        <Leaf className="w-12 h-12 text-[#f37021] mx-auto" />
        <h2 className="text-2xl font-bold">A Greener Way to Read</h2>
        <p className="text-white/80 max-w-xl mx-auto">
          Every book sold on World of Books prevents one more item from entering a landfill. 
          By scraping and presenting these books efficiently, we help accelerate the shift 
          towards a sustainable circular economy.
        </p>
      </section>
    </div>
  );
};

export default About;
