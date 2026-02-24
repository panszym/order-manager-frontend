import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderItems } from "../services/order-service";
import type { OrderItem } from "../model/OrderItem";

export const useOrderItems = () => {
  const { orderCode } = useParams<{ orderCode: string }>();
  const [orderItems, setOrderItems] = useState<OrderItem[] | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    if (!orderCode) return;
    setLoader(true);
    getOrderItems(orderCode!)
      .then((res) => {
        setOrderItems(res.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setLoader(false));
  }, []);
  return { orderItems, errors, isLoading, setLoader, setErrors };
};
