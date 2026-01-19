import axios from "axios";

const apiAccessory = axios.create({
  baseURL: "http://localhost:8080/accessory",
});

export default apiAccessory;