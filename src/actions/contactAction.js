import {
  ADD_CONTACT,
  SET_ERROR,
  EDIT_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  CLEAR_ALL,
  DELETE_CONTACT,
} from "../constants/types";

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

export const setCurrent = (contact) => (dispatch) => {
  dispatch({ type: SET_CURRENT, payload: contact });
};

export const clearCurrent = (dispatch) => {
  dispatch({ type: CLEAR_CURRENT });
};

export const filterContacts = (text) => (dispatch) => {
  dispatch({ type: FILTER_CONTACT, payload: text });
};

export const clearFilter = (dispatch) => {
  dispatch({ type: CLEAR_FILTER });
};

export const clearAll = (dispatch) => {
  dispatch({ type: CLEAR_ALL });
};

export const deleteContact = (contact) => (dispatch) => {
  try {
    dispatch({ type: DELETE_CONTACT, payload: contact });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  }
};
