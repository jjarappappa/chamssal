import axios from "axios";

export const instance = axios.create({
  baseURL: "http://10.150.151.26:80/",
});