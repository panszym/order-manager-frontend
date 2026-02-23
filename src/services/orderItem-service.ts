import apiOrderItems from "../config/ApiOrderItems";
import type { OrderItem } from "../model/OrderItem";

export const addProductToOrder = (
  orderCode: string,
  productOrderCode: string,
  quantity: number,
) => {
  return apiOrderItems.post<OrderItem[]>(
    `/order/${orderCode}/product/${productOrderCode}`,
    null,
    {
      params: { quantity },
    },
  );
};
