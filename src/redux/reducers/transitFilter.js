import { SET_FILTER } from "../actionTypes";
import { TRANSIT_FILTERS } from "../../constants";

const initialState = TRANSIT_FILTERS.BUSSES;

const transitFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default transitFilter;
