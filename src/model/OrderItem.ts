import type { Accessory } from "./AccessoryModel";
import type { Article } from "./ArticleModel";

export interface OrderItem {
  id: number;
  product: Article | Accessory; 
  quantity: number;
  orderedQuantity: number;
  orderCode: string;
  producer: string;
  itemStatus: string;
}