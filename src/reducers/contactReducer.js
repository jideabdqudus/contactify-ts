import { ADD_CONTACT, EDIT_CONTACT, SET_CURRENT } from "../constants/types";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Sameerah Ajenifuja",
      email: "asameerah@gmail.com",
      phone: 8090,
      contactType: "professional",
    },
    {
      id: 2,
      name: "Hanan Ajenifuja",
      email: "hanan@gmail.com",
      phone: 70090,
      contactType: "personal",
    },
  ],
  loading: true,
  current: null,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default contactReducer;
