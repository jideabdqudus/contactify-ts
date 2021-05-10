import {
  LOGIN_ACCOUNT,
  REGISTER_ACCOUNT,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGOUT_ACCOUNT,
  LOGOUT_FAIL,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
} from "../constants/types";
import axios from "axios";
import { appHelpers } from "../apphelpers/appHelpers";

export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .get("http://127.0.0.1:8000/api/auth/user", config)
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

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

export const logout = () => async (dispatch, getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .post("http://127.0.0.1:8000/api/auth/logout", null, config)
    .then((response) => {
      appHelpers.alertSuccess("Logout Succesfull", 3000);
      dispatch({ type: LOGOUT_ACCOUNT });
    })
    .catch((error) => {
      appHelpers.alertError("Logout Failed", 3000);
      dispatch({ type: LOGOUT_FAIL, payload: error.response });
    });
};
