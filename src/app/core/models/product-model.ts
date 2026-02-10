export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  ImageUrl?: string;
  categoryId?: string;
  categoryName?: string;
  stock?: number;
  isActive?: boolean;
}