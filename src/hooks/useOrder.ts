import { useEffect, useState } from "react";
import type { Order } from "../model/OrderModel";
import { getOrders } from "../services/order-service";

const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setErrors] = useState(null);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    getOrders()
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
  }, []);
  return { orders, error, isLoading };
};

export default useOrders;
