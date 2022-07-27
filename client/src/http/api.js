import env from "react-dotenv"
import axios from "axios";

const SERVER_URL = env.SERVER_URL;

const api = axios.create({
  withCredentials: true,
  baseURL: SERVER_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default api;
