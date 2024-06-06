import axios from "axios";

const AxiosService = axios.create({
  baseURL: "https://password-reset-be-5vdp.onrender.com/",
  // baseURL:"http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
  },
});
AxiosService.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosService;
