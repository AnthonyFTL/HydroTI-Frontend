import {
    IRRIGATION_ENTRIES_FETCH_SUCCEEDED,
    IRRIGATION_ENTRIES_RESET_STATE,
} from "../types/locationDetails";

const initialState = {
    details: null,
};

const irrigationDetails = (state = initialState, action) => {
    switch (action.type) {
        case IRRIGATION_ENTRIES_RESET_STATE: {
            return {
                ...initialState,
            };
        }
        case IRRIGATION_ENTRIES_FETCH_SUCCEEDED: {
            return {
                ...state,
                details: action.payload.data,
            };
        }
        default: {
            return state;
        }
    }
};

export default irrigationDetails;
