import env from "react-dotenv";
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

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await api.get("/refresh");
        localStorage.setItem("token", response.data.accessToken);
        return api.request(originalRequest);
      } catch (e) {
        console.log(e);
      }
    }
    throw Error;
  }
);

export default api;
