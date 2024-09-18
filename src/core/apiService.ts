import axios from "axios";

const apiInstance = axios.create({
  baseURL: `https://wholesomebywh.com:3000/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;
