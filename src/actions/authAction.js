import {
  LOGIN_ACCOUNT,
  REGISTER_ACCOUNT,
  REGISTER_FAIL,
} from "../constants/types";

export const register = (profile) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_ACCOUNT, payload: profile });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};

export const login = (profile) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_ACCOUNT, payload: profile });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};
