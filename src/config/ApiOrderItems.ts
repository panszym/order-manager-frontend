import axios from "axios";

const apiOrderItems = axios.create({
  baseURL: "http://localhost:8080/orderItems",
});

export default apiOrderItems;