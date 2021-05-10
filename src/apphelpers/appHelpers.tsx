import { toast } from "react-toastify";

export const appHelpers = {
  validatePassword: (password: any) => {
    const reg = new RegExp(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
    ).test(password);
    return reg;
  },

  alertError: (message: string, duration: number) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: duration,
    });
  },

  alertSuccess: (message: string, duration: number) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: duration,
    });
  },

  alertWarning: (message: string, duration: number) => {
    toast.warning(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: duration,
    });
  },
};
