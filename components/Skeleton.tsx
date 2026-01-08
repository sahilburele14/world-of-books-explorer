
import React from 'react';

export const CardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden animate-pulse">
    <div className="aspect-[3/4] bg-slate-200"></div>
    <div className="p-4 space-y-3">
      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
      <div className="h-3 bg-slate-200 rounded w-1/2"></div>
      <div className="flex justify-between items-center pt-2">
        <div className="h-5 bg-slate-200 rounded w-1/4"></div>
        <div className="h-8 bg-slate-200 rounded w-8"></div>
      </div>
    </div>
  </div>
);

export const DetailSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="aspect-[4/5] bg-slate-200 rounded-2xl"></div>
      <div className="space-y-6">
        <div className="h-10 bg-slate-200 rounded w-3/4"></div>
        <div className="h-6 bg-slate-200 rounded w-1/4"></div>
        <div className="h-8 bg-slate-200 rounded w-1/3"></div>
        <div className="space-y-3">
          <div className="h-4 bg-slate-200 rounded"></div>
          <div className="h-4 bg-slate-200 rounded"></div>
          <div className="h-4 bg-slate-200 rounded w-5/6"></div>
        </div>
        <div className="h-12 bg-slate-200 rounded w-1/2"></div>
      </div>
    </div>
  </div>
);
