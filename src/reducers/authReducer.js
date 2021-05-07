import {
  LOGIN_ACCOUNT,
  REGISTER_ACCOUNT,
  REGISTER_FAIL,
} from "../constants/types.js";

const initialState = {
  profile: {},
  loading: true,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_ACCOUNT:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case LOGIN_ACCOUNT:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        profile: null,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
