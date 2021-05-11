import axios from "axios";
import {
  ADD_CONTACT,
  SET_ERROR,
  EDIT_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  CLEAR_ALL,
  GET_CONTACT,
  DELETE_CONTACT,
} from "../constants/types";
import { appHelpers } from "../apphelpers/appHelpers";

// Get Contact

export const getContact = () => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = getState().auth.token;

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios
    .get("http://127.0.0.1:8000/api/contacts/", config)
    .then((res) => {
      dispatch({ type: GET_CONTACT, payload: res.data });
    })
    .catch((error) => {
      for (const [key, value] of Object.entries(error.response.data)) {
        appHelpers.alertError(`${key}: ${value}`, 5000);
      }
      dispatch({ type: SET_ERROR, payload: error });
    });
};

// Add Contact

export const addContact = (contact) => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = getState().auth.token;

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .post("http://127.0.0.1:8000/api/contacts/", contact, config)
    .then((res) => {
      appHelpers.alertSuccess("Contact added succesfully", 5000);
      dispatch({ type: ADD_CONTACT, payload: contact });
    })
    .catch((error) => {
      for (const [key, value] of Object.entries(error.response.data)) {
        appHelpers.alertError(`${key}: ${value}`, 5000);
      }
      dispatch({ type: SET_ERROR, payload: error });
    });
};

// Edit Contact

export const editContact = (id) => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = getState().auth.token;

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .put("http://127.0.0.1:8000/api/contacts/", id, config)
    .then((res) => {
      dispatch({ type: EDIT_CONTACT, payload: res.id });
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: error });
    });
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

export const deleteContact = (contact) => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = getState().auth.token;

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  console.log(contact);
  axios
    .delete(`http://127.0.0.1:8000/api/contacts/${contact.id}/`, config)
    .then((res) => {
      appHelpers.alertSuccess("Contact Deleted Succesfully", 5000);
      window.location.reload();
      dispatch({ type: DELETE_CONTACT, payload: res });
    })
    .catch((error) => {
      for (const [key, value] of Object.entries(error.response.data)) {
        appHelpers.alertError(`${key}: ${value}`, 5000);
      }
      dispatch({ type: SET_ERROR, payload: error });
    });
};
