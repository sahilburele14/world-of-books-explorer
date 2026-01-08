
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetail, ScrapeStatus, BrowsingHistoryItem } from '../types';
import { geminiService } from '../services/geminiService';
import { DetailSkeleton } from '../components/Skeleton';
import ProductCard from '../components/ProductCard';
import { 
  Star, 
  ShoppingCart, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  CheckCircle,
  MessageSquare,
  ChevronRight,
  ExternalLink,
  History
} from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<ProductDetail | null>(null);
  const [status, setStatus] = useState<ScrapeStatus>(ScrapeStatus.IDLE);

  const addToHistory = useCallback((product: ProductDetail) => {
    const historyRaw = localStorage.getItem('browsing_history') || '[]';
    const history: BrowsingHistoryItem[] = JSON.parse(historyRaw);
    
    const newItem: BrowsingHistoryItem = {
      id: product.id,
      title: product.title,
      path: `/product/${product.id}`,
      timestamp: Date.now()
    };

    const filtered = history.filter(item => item.id !== product.id).slice(0, 9);
    localStorage.setItem('browsing_history', JSON.stringify([newItem, ...filtered]));
  }, []);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!id) return;
      setStatus(ScrapeStatus.PENDING);
      try {
        const data = await geminiService.scrapeProductDetail(id);
        setDetail(data);
        setStatus(ScrapeStatus.SUCCESS);
        addToHistory(data);
      } catch (e) {
        setStatus(ScrapeStatus.ERROR);
      }
    };
    fetchDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (status === ScrapeStatus.PENDING) return <DetailSkeleton />;
  if (!detail) return <div className="p-12 text-center">Product not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <nav className="flex text-xs sm:text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
        <span className="hover:text-[#f37021] cursor-pointer">Home</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="hover:text-[#f37021] cursor-pointer">Books</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-slate-900 font-medium">{detail.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Gallery */}
        <div className="space-y-4 sticky top-24">
          <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
            <img 
              src={detail.imageUrl || `https://picsum.photos/seed/${detail.id}/800/1000`} 
              alt={detail.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
             {[...Array(4)].map((_, i) => (
               <div key={i} className="aspect-square bg-slate-100 rounded-xl overflow-hidden border hover:border-[#f37021] cursor-pointer transition-colors">
                 <img src={`https://picsum.photos/seed/${detail.id + i}/200/200`} className="w-full h-full object-cover" />
               </div>
             ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <span className="bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">In Stock</span>
                <span className="text-slate-400 text-xs font-mono">ID: {detail.sourceId}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {detail.title}
            </h1>
            <p className="text-xl text-slate-600">by <span className="text-[#004a99] font-semibold hover:underline cursor-pointer">{detail.author}</span></p>
            
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(detail.ratingsAvg) ? 'fill-current' : 'text-slate-200'}`} />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-500">
                {detail.ratingsAvg} ({detail.reviewsCount} reviews)
              </span>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-baseline space-x-3">
              <span className="text-4xl font-black text-[#f37021]">{detail.currency}{detail.price.toFixed(2)}</span>
              <span className="text-slate-400 line-through">£14.99</span>
              <span className="text-green-600 text-sm font-bold">Save 25%</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="flex-1 bg-[#f37021] text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-[#d95f1a] transition-all shadow-lg shadow-orange-100 active:scale-95">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Basket</span>
              </button>
              <a 
                href={detail.sourceUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 bg-white border border-slate-200 text-slate-800 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-50 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View on World of Books</span>
              </a>
            </div>

            <div className="pt-4 space-y-3 border-t border-slate-200">
              <div className="flex items-center text-sm text-slate-600">
                <Truck className="w-4 h-4 mr-3 text-[#004a99]" />
                <span>Free delivery on all UK orders</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <RotateCcw className="w-4 h-4 mr-3 text-[#004a99]" />
                <span>30-day easy returns policy</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <ShieldCheck className="w-4 h-4 mr-3 text-[#004a99]" />
                <span>Every used book is quality checked</span>
              </div>
            </div>
          </div>

          {/* Description Tabs */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b-2 border-[#f37021] inline-block pb-1">About this book</h3>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">
              {detail.description}
            </p>
            
            <div className="bg-white border rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                    <tbody>
                        {Object.entries(detail.specs).map(([key, val], i) => (
                            <tr key={key} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                                <td className="py-3 px-6 font-bold text-slate-700 w-1/3 border-r">{key}</td>
                                <td className="py-3 px-6 text-slate-600">{val}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-[#004a99]" />
                Customer Reviews
            </h2>
            <button className="text-[#004a99] font-semibold hover:underline">Write a review</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {detail.reviews.map((review) => (
                <div key={review.id} className="bg-white border p-6 rounded-2xl space-y-3">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-bold text-slate-900">{review.author}</p>
                            <p className="text-xs text-slate-400">{new Date(review.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-slate-200'}`} />
                            ))}
                        </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed italic">"{review.text}"</p>
                    <div className="flex items-center text-[10px] text-green-600 font-bold uppercase">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified Purchase
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {detail.recommendations.map((rec) => (
            <ProductCard 
                key={rec.id} 
                product={{
                    ...rec, 
                    sourceId: 'rec-' + rec.id, 
                    currency: '£', 
                    sourceUrl: '#', 
                    lastScrapedAt: new Date().toISOString()
                } as any} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
