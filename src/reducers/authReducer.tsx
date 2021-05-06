import { CREATE_ACCOUNT } from "../constants/types";

const initialState = {
  username: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        ...state,
        users: [action.payload],
      };
    default:
      return state;
  }
};
