import axios from "axios";
import { BASE_URL } from "../constants/url";

export const httpsRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
