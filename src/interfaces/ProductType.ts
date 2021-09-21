// Sorry I just used only the one i needed it would be too long for me to type everything
import { Ingredient } from "./Ingredient";

export interface ProductType {
  _id: string;
  brands: string;
  image_front_url: string;
  allergens: string;
  allergens_imported: string;
  product_name: string;
  ingredients: Ingredient[];
  categories: string;
  image_ingredients_url: string;
  image_nutrition_url: string;
}
