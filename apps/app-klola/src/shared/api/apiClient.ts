import axios from "axios";
import { createApiClient } from "@generated/zodios-client";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

const apiClient = createApiClient("http://localhost:3000/api", {
  axiosInstance,
});

export default apiClient;

