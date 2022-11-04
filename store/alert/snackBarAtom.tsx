import { AlertColor } from "@mui/material";
import { atom } from "recoil";

interface snackBar {
  isOpen: boolean;
  message: string;
  severity: AlertColor | undefined;
}

export const snackBarState = atom({
  key: "snackBar",
  default: {
    isOpen: false,
    message: "",
    severity: undefined,
  },
});
