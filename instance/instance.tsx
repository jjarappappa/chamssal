import axios from "axios";

export const instance = axios.create({
  baseURL: "http://10.150.150.191:8080/",
});
