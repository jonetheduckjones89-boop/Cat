import axios from "axios";

// Using a fallback for demo purposes if env is not set
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://api.example.com";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1500, // Fail fast (1.5s) to trigger mock data in demo environment
});