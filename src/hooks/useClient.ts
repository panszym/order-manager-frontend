import { useEffect, useState } from "react";
import { getClient } from "../services/client-service";
import type { Client } from "../model/ClientModel";

const useClient = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [error, setErrors] = useState(null);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    getClient()
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
  }, []);
  return { clients, error, isLoading };
};

export default useClient;
