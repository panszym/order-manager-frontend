import apiAccessory from "../config/ApiAccessory";
import type { Accessory } from "../model/AccessoryModel";

export const getAccessory = () => {
  return apiAccessory.get<Accessory[]>("");
};
export const getAccessoryByOrderCode = (orderCode: string) => {
  return apiAccessory.get<Accessory>(`orderCode/${orderCode}`);
};

export const getAccessoryById = (accessoryId: string) => {
  return apiAccessory.get<Accessory>(`/${accessoryId}`);
};

export const deleteAccessory = (orderCode: string) => {
  return apiAccessory.delete(`orderCode/${orderCode}`);
};

export const updateAccessory = (orderCode: string, accessory: Accessory) => {
  return apiAccessory.patch<Accessory>(`/${orderCode}`, accessory);
};

export const addAccessory = (accessory: Accessory) => {
  return apiAccessory.post<Accessory>(``, accessory);
};
