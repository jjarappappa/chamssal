import { AlertColor } from "@mui/material";
import { atom } from "recoil";

interface SnackBar {
  isOpen: boolean;
  message: string;
  severity: AlertColor | undefined;
}

export const snackBarState = atom<SnackBar>({
  key: "snackBar",
  default: {
    isOpen: false,
    message: "",
    severity: undefined,
  },
});
