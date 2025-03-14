export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  details?: string;
  longDescription?: string;
}