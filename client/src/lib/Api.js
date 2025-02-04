import axios from "axios";
import { HOST_SERVER, REFERER } from "./constants.js";

const Api = axios.create({
  baseURL: HOST_SERVER,
  headers: {
    Referer: REFERER, // http://localhost:5173 || https://qyf-eg.org
    "Content-Type": "application/json",
  },
});

export default Api;
