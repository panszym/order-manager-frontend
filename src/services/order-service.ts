import apiOrder from "../config/ApiOrder";
import type { Order } from "../model/OrderModel";

export const getOrders = () => {
  return apiOrder.get<Order[]>("");
};

export const getOrderByOrderCode = (orderCode: string) => {
    return apiOrder.get<Order>(`orderCode/${orderCode}`);
}

export const getOrderById = (orderId: string) => {
    return apiOrder.get<Order>(`/${orderId}`);
}

export const deleteOrder = (orderCode: string) => {
  return apiOrder.delete(`orderCode/${orderCode}`);
};

export const updateOrder = (orderCode: string, order: Order) => {
  return apiOrder.patch<Order>(`/${orderCode}`, order);
};

export const addOrder = (order: Order) => {
  return apiOrder.post<Order>(``, order);
};