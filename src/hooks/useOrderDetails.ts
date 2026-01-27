import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderByOrderCode } from "../services/order-service";
import type { Order } from "../model/OrderModel";

export const useOrderDetails = () => {
  const { orderCode } = useParams<{ orderCode: string }>();
  const [order, setOrders] = useState<Order | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getOrderByOrderCode(orderCode!)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setLoader(false));
  }, []);
  return { order, errors, isLoading, setLoader, setErrors };
};
