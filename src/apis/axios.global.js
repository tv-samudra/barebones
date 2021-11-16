import Axios from "axios";
import { API_URL } from "../config";
import { getPersistentAuthentication } from "../utils/functions";

let axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use((config) => {
  let token = getPersistentAuthentication()?.token;
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default axios;
