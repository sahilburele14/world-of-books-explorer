import React from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_HEADINGS, MOCK_CATEGORIES } from '../constants';
import { ArrowRight, BookOpen, Globe, ShieldCheck, Leaf, ShoppingBag } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#004a99] to-[#003d7e] rounded-3xl p-8 md:p-16 text-white shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block bg-[#f37021] text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full mb-6">
              Production-Minded Scraping
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Your Next Adventure <br />
              <span className="text-[#f37021]">Costs Less Than Coffee.</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 max-w-lg">
              Explore over 7 million used books scraped directly from World of Books. 
              Save money, save the planet, and find your next favorite read today.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/category/fiction" 
                className="bg-[#f37021] text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-[#d95f1a] transition-all flex items-center justify-center group"
              >
                Shop All Books
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="bg-white/10 backdrop-blur text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-center hover:bg-white/20 transition-all"
              >
                Learn Our Mission
              </Link>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#f37021]/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-10 top-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* ✅ Tailwind Confirmation Snippet */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-3xl font-bold text-blue-600 text-center">
          Tailwind is working!
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Browse by Heading</h2>
            <p className="text-slate-500 mt-1">Live navigation scraped from the source</p>
          </div>
          <Link to="/category/all" className="text-[#004a99] font-semibold flex items-center hover:underline">
            View all categories <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {INITIAL_HEADINGS.map((heading) => (
            <Link 
              key={heading.id} 
              to={`/category/${heading.slug}`}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-[#f37021] transition-all text-center"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f37021]/10 transition-colors">
                <BookOpen className="w-6 h-6 text-[#004a99] group-hover:text-[#f37021] transition-colors" />
              </div>
              <h3 className="font-bold text-slate-800">{heading.title}</h3>
              <p className="text-xs text-slate-400 mt-2">
                Last updated: {new Date(heading.lastScrapedAt).toLocaleDateString()}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Value Props */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Globe, title: "7M+ Books", desc: "Huge selection of pre-loved gems." },
              { icon: ShieldCheck, title: "Quality Checked", desc: "Every book inspected before sale." },
              { icon: Leaf, title: "Sustainability", desc: "A circular economy pioneer." },
              { icon: ShoppingBag, title: "Affordable", desc: "Books starting from just £2.15." }
            ].map((prop, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-[#f37021]">
                  <prop.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg text-slate-900">{prop.title}</h4>
                <p className="text-slate-500 text-sm">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Placeholder */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-[#f37021] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="mb-8 md:mb-0 max-w-md text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Never miss a hidden gem.</h2>
            <p className="text-white/80">Sign up for our curated book alerts and exclusive scraping-driven insights.</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-6 py-4 rounded-l-xl border-none focus:ring-0 text-slate-900 w-full md:w-64"
            />
            <button className="bg-[#004a99] px-8 py-4 rounded-r-xl font-bold hover:bg-[#003d7e] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
