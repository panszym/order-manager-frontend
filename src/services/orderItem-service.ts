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

export const updateQuantity = (id: number, quantity: number) => {
  return apiOrderItems.patch<OrderItem[]>(`/id/${id}`, null, {
    params: { quantity },
  });
};

export const updateOrderedQuantity = (id: number, orderedQuantity: number) => {
  return apiOrderItems.patch<OrderItem[]>(`/orderedQuantity/id/${id}`, null, {
    params: { orderedQuantity },
  });
};

export const updateOrderItemStatus = (id: number, itemStatus: string) => {
  return apiOrderItems.patch(`/id/${id}/itemStatus/${itemStatus}`);
};
