import axios from "axios";

const apiOrder = axios.create({
  baseURL: "http://localhost:8080",
});

export default apiOrder;