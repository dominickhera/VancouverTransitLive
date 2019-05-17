import { ADD_BUS, SET_FILTER } from "./actionTypes";

let nextBusId = 0;

export const addBus = content => ({
    type: ADD_BUS,
    payload: {
        id: ++nextBusId,
        content
    }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter }});