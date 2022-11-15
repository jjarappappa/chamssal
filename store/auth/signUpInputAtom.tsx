import { atom } from "recoil";

export const signUpInputState = atom({
  key: "signUpInput",
  default: {
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    birthday: "",
    name: "",
    nickname: "",
    postcode: "",
    address: "",
    detailAddress: "",
  },
});
