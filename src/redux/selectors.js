import { TRANSIIT_FILTERS } from "../constants";

export const getBussesState = store => store.busses;

export const getBusList = store => 
    getBussesState(store) ? { ...getBussesState(store).byIds[id], id} : {};

export const getBusses = store =>
    getBusList(store).map(id => getBusById(store, id));

    