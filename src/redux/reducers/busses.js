import {ADD_BUS} from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_BUS: {
            const {id, content} = action.payload;
            return {
                ...state,
                allIIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content
                    }
                }
            };
        }
        default:
            return state;
    }
}