
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { APP_NAME } from '../constants';
import { Search, ShoppingBag, Menu, User, History } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-[#004a99] text-white text-xs py-2 px-4 text-center font-medium">
        Free UK Delivery on all orders! 📚
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-[#f37021] p-1.5 rounded-lg">
                 <ShoppingBag className="text-white w-6 h-6" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#004a99]">
                WorldOf<span className="text-[#f37021]">Books</span>
              </span>
            </Link>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search over 7 million used books..."
                  className="w-full bg-slate-100 border-none rounded-full py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-[#f37021] text-sm transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Link to="/history" className="text-slate-600 hover:text-[#f37021] transition-colors p-2 rounded-full hover:bg-slate-50">
                <History className="w-5 h-5" />
              </Link>
              <button className="text-slate-600 hover:text-[#f37021] transition-colors p-2 rounded-full hover:bg-slate-50">
                <User className="w-5 h-5" />
              </button>
              <button 
                className="md:hidden text-slate-600 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories Nav (Desktop) */}
        <nav className="hidden md:block bg-slate-50 border-t">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex space-x-8 py-3 text-sm font-medium text-slate-700">
              <li><Link to="/" className="hover:text-[#f37021] transition-colors">Home</Link></li>
              <li><Link to="/category/fiction" className="hover:text-[#f37021] transition-colors">Fiction</Link></li>
              <li><Link to="/category/non-fiction" className="hover:text-[#f37021] transition-colors">Non-Fiction</Link></li>
              <li><Link to="/category/childrens" className="hover:text-[#f37021] transition-colors">Children's</Link></li>
              <li><Link to="/category/rare-books" className="hover:text-[#f37021] transition-colors">Rare Books</Link></li>
              <li><Link to="/about" className="hover:text-[#f37021] transition-colors">About Us</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-12 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#f37021]">World of Books</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We're a circular economy pioneer, selling over 12 million used books a year. 
                Our mission is to help people reuse, read and protect the planet.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/about" className="hover:text-white">Help & Support</Link></li>
                <li><Link to="/about" className="hover:text-white">Delivery Information</Link></li>
                <li><Link to="/about" className="hover:text-white">Returns & Refunds</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/category/rare-books" className="hover:text-white">Rare Books</Link></li>
                <li><Link to="/category/textbooks" className="hover:text-white">Sell to Us</Link></li>
                <li><Link to="/about" className="hover:text-white">Sustainability Report</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-slate-400 mb-4">Get the latest book deals and sustainable living tips.</p>
              <div className="flex">
                <input type="email" placeholder="Email address" className="bg-slate-800 border-none rounded-l-md px-3 py-2 text-sm w-full focus:ring-1 focus:ring-[#f37021]" />
                <button className="bg-[#f37021] px-4 py-2 rounded-r-md font-bold text-sm hover:bg-[#d95f1a] transition-colors">Join</button>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>© 2024 World of Books Explorer. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
