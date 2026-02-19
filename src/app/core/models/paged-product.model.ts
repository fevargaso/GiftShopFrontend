import { Product } from "./product-model";

export interface PagedProductResponse {
  items: Product[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  totalCount: number;
}