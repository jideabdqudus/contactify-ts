import {
  LOGIN_ACCOUNT,
  REGISTER_ACCOUNT,
  REGISTER_FAIL,
} from "../constants/types";
import axios from "axios";

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
  console.log(data);
  axios
    .post("http://127.0.0.1:8000/api/auth/register", data, config)
    .then((response) => {
      console.log(response);
      dispatch({ type: REGISTER_ACCOUNT, payload: data });
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({ type: REGISTER_FAIL, payload: error });
    });
};

export const login = (profile) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_ACCOUNT, payload: profile });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};
