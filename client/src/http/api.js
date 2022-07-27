import("dotenv").config();
import axios from "axios";

export const SERVER_URL = process.env.SERVER_URL;

const api = axios.create({
  withCredentials: true,
  baseURL: SERVER_URL,
});

export default api;
