import axios from "axios";

const apiArticle = axios.create({
  baseURL: "http://localhost:8080",
});

export default apiArticle;
