export type ProductCategory =
  | 'roller-chains'
  | 'sprockets'
  | 'pulleys'
  | 'couplings'
  | 'wire-ropes'
  | 'lifting-equipment';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  subcategory?: string;
  description: string;
  longDescription: string;
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
  images: string[];
  sizes: string[];
  brands: string[];
  isFeatured: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  location: string;
  rating: number;
  content: string;
  industry: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  coverImage: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  products: string[];
}
