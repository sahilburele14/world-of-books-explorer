
import { NavigationHeading } from './types';

export const APP_NAME = "World of Books Explorer";
export const PRIMARY_COLOR = "bg-[#f37021]"; // WoB Orange
export const SECONDARY_COLOR = "bg-[#004a99]"; // WoB Blue

export const INITIAL_HEADINGS: NavigationHeading[] = [
  { id: '1', title: 'Books', slug: 'books', lastScrapedAt: new Date().toISOString() },
  { id: '2', title: 'Categories', slug: 'categories', lastScrapedAt: new Date().toISOString() },
  { id: '3', title: 'Children\'s Books', slug: 'childrens-books', lastScrapedAt: new Date().toISOString() },
  { id: '4', title: 'Rare Books', slug: 'rare-books', lastScrapedAt: new Date().toISOString() },
  { id: '5', title: 'Textbooks', slug: 'textbooks', lastScrapedAt: new Date().toISOString() }
];

export const MOCK_CATEGORIES = [
  { id: 'c1', title: 'Fiction', slug: 'fiction', navigationId: '1' },
  { id: 'c2', title: 'Non-Fiction', slug: 'non-fiction', navigationId: '1' },
  { id: 'c3', title: 'Sci-Fi & Fantasy', slug: 'sci-fi-fantasy', navigationId: '1' },
  { id: 'c4', title: 'Crime & Thriller', slug: 'crime-thriller', navigationId: '1' },
  { id: 'c5', title: 'History', slug: 'history', navigationId: '2' },
  { id: 'c6', title: 'Biography', slug: 'biography', navigationId: '2' },
];
