import { ADD_CONTACT } from "../constants/types";

const initialState = {
  contacts: [
    {
      name: "Sameerah Ajenifuja",
      email: "asameerah@gmail.com",
      phone: 8090,
      contactType: "professional",
    },
    {
      name: "Hanan Ajenifuja",
      email: "hanan@gmail.com",
      phone: 70090,
      contactType: "personal",
    },
  ],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};

export default contactReducer;
