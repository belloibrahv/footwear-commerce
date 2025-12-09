export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'sneakers' | 'sandals' | 'boots' | 'school-shoes' | 'casual';
  sizes: number[];
  colors: string[];
  images: string[];
  featured: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: number;
  selectedColor: string;
}

export interface TeamMember {
  id: number;
  name: string;
  matricNumber: string;
  role?: string;
}

export interface FilterOptions {
  category?: string;
  priceRange?: [number, number];
  sizes?: number[];
  colors?: string[];
  sortBy?: 'price-asc' | 'price-desc' | 'name' | 'rating';
}
