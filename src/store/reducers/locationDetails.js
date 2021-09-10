import {
  LOCATION_DETAILS_FETCH_SUCCEEDED,
  LOCATION_DETAILS_RESET_STATE,
} from "../types/locationDetails";

const initialState = {
  details: null,
};

const locationDetails = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_DETAILS_RESET_STATE: {
      return {
        ...initialState,
      };
    }
    case LOCATION_DETAILS_FETCH_SUCCEEDED: {
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

export default locationDetails;
