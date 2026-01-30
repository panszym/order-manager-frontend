import axios from "axios";

const apiCategory = axios.create({
  baseURL: "http://localhost:8080/category",
});

export default apiCategory;
