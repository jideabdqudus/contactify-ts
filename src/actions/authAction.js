import {
  LOGIN_ACCOUNT,
  REGISTER_ACCOUNT,
  REGISTER_FAIL,
  CLEAR_ERROR,
  LOGIN_FAIL
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
  axios
    .post("http://127.0.0.1:8000/api/auth/register", data, config)
    .then((response) => {
      console.log(response.status);
      dispatch({ type: REGISTER_ACCOUNT, payload: data });
    })
    .catch((error) => {
      dispatch({ type: REGISTER_FAIL, payload: error.response });
    });
};

export const login = (profile) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_ACCOUNT, payload: profile });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};


// setTimeout(() => {
//   dispatch(clearError());
// }, 1000);



// if (auth.isAuthenticated === true) {
//   appHelpers.alertSuccess("Account Created", 5000);
//   <Redirect to="/" />;
// } else {
//   for (const [key, value] of Object.entries(auth.message)) {
//     appHelpers.alertError(`${key}: ${value}`, 5000);
//   }
// }