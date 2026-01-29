import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Producer } from "../model/ProducerModel";
import { getProducerByName } from "../services/producer-service";

export const useProducerDetails = () => {
  const { name } = useParams<{ name: string }>();
  const [producers, setProducers] = useState<Producer | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getProducerByName(name!)
      .then((res) => {
        setProducers(res.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setLoader(false));
  }, []);
  return { producers, errors, isLoading, setLoader, setErrors };
};
