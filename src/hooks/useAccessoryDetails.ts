import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Accessory } from "../model/AccessoryModel";
import { getAccessoryByOrderCode } from "../services/accessory-service";

export const useAccessoryDetails = () => {
  const { orderCode } = useParams<{ orderCode: string }>();
  const [accessory, setAccessories] = useState<Accessory | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getAccessoryByOrderCode(orderCode!)
      .then((res) => {
        setAccessories(res.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setLoader(false));
  }, []);
  return { accessory, errors, isLoading, setLoader, setErrors };
};
