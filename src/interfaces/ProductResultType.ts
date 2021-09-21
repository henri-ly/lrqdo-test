import { ProductType } from "./ProductType";

export interface ProductResultType {
  code: string;
  status: number;
  status_verbose: string;
  product: ProductType;
  brands: string;
}
