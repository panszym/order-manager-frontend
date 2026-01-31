import apiClient from "../config/ApiClient";
import type { Client } from "../model/ClientModel";

export const getClient = () => {
  return apiClient.get<Client[]>("");
};

export const getClientByCode = (code: string) => {
  return apiClient.get<Client>(`code/${code}`);
};

export const getClientById = (clientId: string) => {
  return apiClient.get<Client>(`id/${clientId}`);
};

export const deleteClient = (code: string) => {
  return apiClient.delete(`code/${code}`);
};

export const updateClient = (code: string, client: Client) => {
  return apiClient.patch<Client>(`code/${code}`, client);
};

export const addClient = (client: Client) => {
  return apiClient.post<Client>(``, client);
};
