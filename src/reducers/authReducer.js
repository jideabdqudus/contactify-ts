import {
  LOGIN_ACCOUNT,
  REGISTER_ACCOUNT,
  REGISTER_FAIL,
  LOGIN_FAIL,
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
        profile: action.payload.data,
        loading: false,
        error: {
          status: action.payload.status,
          statusText: action.payload.statusText,
        },
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
    default:
      return state;
  }
};

export default authReducer;
