
export enum ScrapeStatus {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface NavigationHeading {
  id: string;
  title: string;
  slug: string;
  lastScrapedAt: string;
}

export interface Category {
  id: string;
  navigationId: string;
  parentId?: string;
  title: string;
  slug: string;
  productCount: number;
  lastScrapedAt: string;
}

export interface Product {
  id: string;
  sourceId: string;
  title: string;
  author: string;
  price: number;
  currency: string;
  imageUrl: string;
  sourceUrl: string;
  lastScrapedAt: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  text: string;
  createdAt: string;
}

export interface ProductDetail extends Product {
  description: string;
  specs: Record<string, string>;
  ratingsAvg: number;
  reviewsCount: number;
  reviews: Review[];
  recommendations: Product[];
}

export interface BrowsingHistoryItem {
  id: string;
  title: string;
  path: string;
  timestamp: number;
}
