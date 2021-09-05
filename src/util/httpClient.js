import axios from "axios";

export const CancelToken = axios.CancelToken;
export const isCancel = (thrown) => axios.isCancel(thrown);

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
