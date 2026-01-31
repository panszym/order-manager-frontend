import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Client } from "../model/ClientModel";
import { getClientByCode } from "../services/client-service";

export const useClientDetails = () => {
  const { code } = useParams<{ code: string }>();
  const [clients, setClients] = useState<Client | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getClientByCode(code!)
      .then((res) => {
        setClients(res.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setLoader(false));
  }, []);
  return { clients, errors, isLoading, setLoader, setErrors };
};
