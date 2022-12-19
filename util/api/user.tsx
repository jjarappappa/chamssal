import { instance } from "../../instance/instance";
import { authorization } from "../config/authorization";

export const getUserInfo = async () => {
  return await instance.get("/user", authorization());
};
