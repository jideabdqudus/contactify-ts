import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  FILTER_CONTACT,
  SET_CURRENT,
  GET_CONTACT,
} from "../constants/types";

const initialState = {
  contacts: [],
  loading: false,
  current: null,
  filtered: null,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        contacts: action.payload,
        loading: false,
        current: null,
        filtered: null,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case SET_CURRENT:
      return { ...state, current: action.payload };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        loading: false,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact !== action.payload
        ),
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter(
          (contact) =>
            contact.name.toLowerCase().indexOf(action.payload.toLowerCase()) !==
            -1
        ),
      };
    default:
      return state;
  }
};

export default contactReducer;
