import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import contactReducer from "./contactReducer";

export default combineReducers({ auth: authReducer, contactReducer });



