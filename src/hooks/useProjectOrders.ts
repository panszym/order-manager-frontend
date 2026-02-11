import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Order } from "../model/OrderModel";
import { getProjectOrders } from "../services/project-service";

const useProjectOrders = () => {
  const { projectCode } = useParams<{ projectCode: string }>();
  const [order, setOrder] = useState<Order[]>([]);
  const [error, setErrors] = useState(null);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    if (!projectCode) return;
    setLoader(true);

    getProjectOrders(projectCode)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
  }, []);
  return { order, error, isLoading };
};

export default useProjectOrders;
