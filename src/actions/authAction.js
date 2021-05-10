import {
  LOGIN_ACCOUNT,
  REGISTER_ACCOUNT,
  REGISTER_FAIL,
  LOGIN_FAIL,
} from "../constants/types";
import axios from "axios";
import { appHelpers } from "../apphelpers/appHelpers";

export const register = (username, email, password) => async (dispatch) => {
  const data = JSON.stringify({
    username: username,
    email: email,
    password: password,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post("http://127.0.0.1:8000/api/auth/register", data, config)
    .then((response) => {
      appHelpers.alertSuccess("Account Created Succesfully", 5000);
      dispatch({ type: REGISTER_ACCOUNT, payload: response });
    })
    .catch((error) => {
      for (const [key, value] of Object.entries(error.response.data)) {
        appHelpers.alertError(`${key}: ${value}`, 5000);
      }
      dispatch({ type: REGISTER_FAIL, payload: error.response });
    });
};

export const login = (profile) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post("http://127.0.0.1:8000/api/auth/login", profile, config)
    .then((response) => {
      appHelpers.alertSuccess("Login Succesfull", 1000);
      dispatch({ type: LOGIN_ACCOUNT, payload: response });
    })
    .catch((error) => {
      for (const [key, value] of Object.entries(error.response.data)) {
        appHelpers.alertError(`${key}: ${value}`, 5000);
      }
      dispatch({ type: LOGIN_FAIL, payload: error.response });
    });
};
