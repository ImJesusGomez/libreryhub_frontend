import { useAuthContext } from "@/store/auth.store";
import axios from "axios";

const libraryHubApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

libraryHubApi.interceptors.request.use((config) => {
  const token = useAuthContext.getState().auth?.accessToken;

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

libraryHubApi.interceptors.response.use((config) => {
  const token = useAuthContext.getState().auth?.accessToken;

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default libraryHubApi;
