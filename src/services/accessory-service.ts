
import apiAccessory from "../config/ApiAccessory"
import type { Accessory } from "../model/AccessoryModel"


export const getAccessory = () => {
    return apiAccessory.get<Accessory []>('/accessory')
}