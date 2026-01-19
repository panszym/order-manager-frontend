import axios from "axios";

const apiProjects = axios.create({
  baseURL: "http://localhost:8080/projects",
});

export default apiProjects;