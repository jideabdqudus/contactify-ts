import { ADD_CONTACT, SET_ERROR, EDIT_CONTACT } from "../constants/types";

export const addContact = (contact) => (dispatch) => {
  try {
    dispatch({ type: ADD_CONTACT, payload: contact });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  }
};


export const editContact = (id) => (dispatch) => {
  try {
    dispatch({ type: EDIT_CONTACT, payload: id });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  }
};