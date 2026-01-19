import { useEffect, useState } from "react";
import type { User } from "../model/UserModel";
import { getUsers } from "../services/user-service";

const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setErrors] = useState(null);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
  }, []);
  return { users, error, isLoading };
};

export default useUser;
