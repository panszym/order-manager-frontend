import { useEffect, useState } from "react";
import type { Accessory } from "../model/AccessoryModel";
import { getArticleAccessories } from "../services/article-service";
import { useParams } from "react-router-dom";

const useArticleAccessories = () => {
  const { orderCode } = useParams<{ orderCode: string }>();
  const [accessory, setAccessory] = useState<Accessory[]>([]);
  const [error, setErrors] = useState(null);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    if (!orderCode) return;
    setLoader(true);

    getArticleAccessories(orderCode)
      .then((response) => {
        setAccessory(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
  }, []);
  return { accessory, error, isLoading };
};

export default useArticleAccessories;
