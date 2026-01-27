import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../model/UserModel";
import { getUserByAdminByLogin } from "../services/user-service";

export const useUserDetails = () => {
  const { login } = useParams<{ login: string }>();
  const [user, setUsers] = useState<User | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getUserByAdminByLogin(login!)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setLoader(false));
  }, []);
  return { user, errors, isLoading, setLoader, setErrors };
};
