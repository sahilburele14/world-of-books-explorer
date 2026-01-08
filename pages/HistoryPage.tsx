
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowsingHistoryItem } from '../types';
import { Trash2, BookOpen, Clock } from 'lucide-react';

const HistoryPage: React.FC = () => {
  const [history, setHistory] = useState<BrowsingHistoryItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem('browsing_history');
    if (raw) {
      setHistory(JSON.parse(raw));
    }
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('browsing_history');
    setHistory([]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Browsing History</h1>
          <p className="text-slate-500 mt-1">Recently viewed books and categories</p>
        </div>
        {history.length > 0 && (
          <button 
            onClick={clearHistory}
            className="text-red-600 font-semibold text-sm flex items-center hover:underline"
          >
            <Trash2 className="w-4 h-4 mr-1" /> Clear all
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="bg-slate-50 rounded-3xl p-12 text-center space-y-6">
          <Clock className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-xl font-bold text-slate-700">No history yet</h3>
          <p className="text-slate-500">Your recently viewed items will appear here.</p>
          <Link to="/" className="inline-block bg-[#004a99] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#003d7e] transition-all">
            Start Exploring
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((item) => (
            <Link 
              key={item.id + item.timestamp} 
              to={item.path}
              className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-[#f37021] transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-[#004a99] group-hover:bg-[#f37021]/10 group-hover:text-[#f37021] transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-[#f37021] transition-colors">{item.title}</h4>
                  <p className="text-xs text-slate-400">Viewed {new Date(item.timestamp).toLocaleString()}</p>
                </div>
              </div>
              <div className="text-[#004a99] opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-xs font-bold uppercase tracking-wider">View Again →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
