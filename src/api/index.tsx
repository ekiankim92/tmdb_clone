import axios from "axios";
import { API_URL } from "../common/config";

export const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
  },
});
