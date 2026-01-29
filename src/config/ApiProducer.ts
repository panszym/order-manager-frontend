import axios from "axios";

const apiProducer = axios.create({
  baseURL: "http://localhost:8080/producer",
});

export default apiProducer;
