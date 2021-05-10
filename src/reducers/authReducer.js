import {
  LOGIN_ACCOUNT,
  REGISTER_ACCOUNT,
  REGISTER_FAIL,
  LOGIN_FAIL,
  CLEAR_ERROR,
} from "../constants/types.js";

const initialState = {
  profile: null,
  loading: true,
  error: null,
  message: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_ACCOUNT:
      return {
        ...state,
        profile: action.payload,
        loading: false,
        error: action.payload.status,
        isAuthenticated: true,
      };
    case LOGIN_ACCOUNT:
      return {
        ...state,
        profile: action.payload,
        loading: false,
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
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
        message: null,
      };
    default:
      return state;
  }
};

export default authReducer;
