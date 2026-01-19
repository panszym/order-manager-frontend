import apiOrder from "../config/ApiOrder";
import type { Order } from "../model/OrderModel";

export const getOrders = () => {
  return apiOrder.get<Order[]>("");
};
