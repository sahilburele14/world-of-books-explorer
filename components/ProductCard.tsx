
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingCart, Heart, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
        <img
          src={product.imageUrl || `https://picsum.photos/seed/${product.id}/400/600`}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white/90 backdrop-blur p-2 rounded-full shadow-sm hover:bg-white text-slate-600">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        {/* Scrape Badge */}
        <div className="absolute bottom-2 left-2">
            <span className="bg-[#004a99]/80 backdrop-blur text-white text-[10px] px-2 py-0.5 rounded-full font-medium">
                Freshly Scraped
            </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="block group-hover:text-[#f37021] transition-colors">
          <h3 className="font-semibold text-slate-800 line-clamp-2 text-sm sm:text-base leading-tight">
            {product.title}
          </h3>
        </Link>
        <p className="text-slate-500 text-xs mt-1 mb-2 italic">{product.author}</p>
        
        <div className="mt-auto pt-3 flex items-center justify-between border-t border-slate-50">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 line-through">£12.99</span>
            <span className="text-lg font-bold text-[#f37021]">
              {product.currency}{product.price.toFixed(2)}
            </span>
          </div>
          <button className="bg-[#004a99] text-white p-2.5 rounded-lg hover:bg-[#003d7e] transition-colors shadow-sm active:scale-95">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
