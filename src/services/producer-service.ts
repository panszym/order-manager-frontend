import apiProducer from "../config/ApiProducer";
import type { Producer } from "../model/ProducerModel";

export const getProducer = () => {
  return apiProducer.get<Producer[]>("");
};

export const getProducerByName = (name: string) => {
  return apiProducer.get<Producer>(`name/${name}`);
};

export const getProducerById = (producerId: string) => {
  return apiProducer.get<Producer>(`id/${producerId}`);
};

export const deleteProducer = (name: string) => {
  return apiProducer.delete(`name/${name}`);
};

export const updateProducer = (name: string, producer: Producer) => {
  return apiProducer.patch<Producer>(`name/${name}`, producer);
};

export const addProducer = (producer: Producer) => {
  return apiProducer.post<Producer>(``, producer);
};
