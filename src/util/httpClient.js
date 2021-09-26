import axios from "axios";
import { getUserToken } from "../services/common/storageService";

export const CancelToken = axios.CancelToken;
export const isCancel = (thrown) => axios.isCancel(thrown);

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const newConfig = { ...config };
  const token = getUserToken();
  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }
  return newConfig;
});

export default instance;
