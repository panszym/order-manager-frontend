import axios from "axios";

const apiProjects = axios.create({
  baseURL: "http://localhost:8080",
});

export default apiProjects;