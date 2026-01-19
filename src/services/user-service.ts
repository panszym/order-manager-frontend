import apiUser from "../config/ApiUser";
import type { User } from "../model/UserModel";

export const getUsers = () => {
  return apiUser.get<User[]>("/users");
};
