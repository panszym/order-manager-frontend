import { useEffect, useState } from "react";
import type { Producer } from "../model/ProducerModel";
import { getProducer } from "../services/producer-service";

const useProducers = () => {
  const [producers, setProducers] = useState<Producer[]>([]);
  const [error, setErrors] = useState(null);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    getProducer()
      .then((response) => {
        setProducers(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
  }, []);
  return { producers, error, isLoading };
};

export default useProducers;
