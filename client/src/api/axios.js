import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Add token automatically to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // token stored globally
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;