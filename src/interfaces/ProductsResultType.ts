import { ProductType } from "./ProductType";

export interface ProductsResultType {
  count: number;
  page: number;
  page_count: number;
  page_size: number;
  products: ProductType[];
}
