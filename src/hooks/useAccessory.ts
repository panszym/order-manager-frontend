import { useEffect, useState } from "react";
import type { Accessory } from "../model/AccessoryModel";
import { getAccessory } from "../services/accessory-service";

const useAccessory = () => {
  const [accessory, setAccessory] = useState<Accessory[]>([]);
  const [error, setErrors] = useState(null);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    getAccessory()
      .then((response) => {
        setAccessory(response.data);
        console.log(response.data)
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
  }, []);
  return { accessory, error, isLoading };
};

export default useAccessory;