import axios from "axios";

export const api = axios.create({
  baseURL: "https://heavy-10.onrender.com",
  withCredentials: true,
});