import apiUser from "../config/ApiUser";
import type { User } from "../model/UserModel";

export const getUsers = () => {
  return apiUser.get<User[]>("");
};

export const getUserByAdminByLogin = (login: string) => {
    return apiUser.get<User>(`/login/${login}`);
}

export const deleteUser = (login: string) => {
  return apiUser.delete(`/${login}`);
};

export const updateUser = (login: string, user: User) => {
  return apiUser.patch<User>(`/${login}`, user);
};
