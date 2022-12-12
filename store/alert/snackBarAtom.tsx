import { AlertColor } from "@mui/material";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { atom } from "recoil";

interface SnackBar {
  isOpen: boolean;
  message: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
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
