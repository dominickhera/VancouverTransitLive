import { combineReducers } from "redux";
import transitFilter from "./transitFilter";
import busses from "./busses";

export default combineReducers({ busses, transitFilter });