import { ADD_CONTACT, SET_ERROR } from "../constants/types";

export const addContact = (contact) => (dispatch) => {
  try {
    dispatch({ type: ADD_CONTACT, payload: contact });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  }
};
