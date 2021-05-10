import {
  LOGIN_ACCOUNT,
  REGISTER_ACCOUNT,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGOUT_ACCOUNT,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
} from "../constants/types.js";

const initialState = {
  profile: null,
  loading: false,
  error: null,
  message: null,
  token: localStorage.getItem("token"),
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: localStorage.getItem("token"),
        profile: { user: action.payload },
      };
    case LOGIN_ACCOUNT:
    case REGISTER_ACCOUNT:
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        profile: action.payload.data,
        loading: false,
        error: {
          status: action.payload.status,
          statusText: action.payload.statusText,
        },
        token: localStorage.getItem("token"),
        isAuthenticated: true,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        profile: null,
        error: {
          status: action.payload.status,
          statusText: action.payload.statusText,
        },
        isAuthenticated: false,
        loading: false,
        message: action.payload.data,
      };
    case AUTH_ERROR:
    case LOGOUT_ACCOUNT:
      localStorage.removeItem('token');
      return {
        profile: null,
        loading: false,
        error: null,
        message: null,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
