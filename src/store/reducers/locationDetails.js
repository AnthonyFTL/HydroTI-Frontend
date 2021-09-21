import {
  LOCATION_DETAILS_FETCH_SUCCEEDED,
  LOCATION_DETAILS_RESET_STATE,
  LOCATION_DETAILS_EDIT_SUCCEEDED,
  LOCATION_DETAILS_DELETE_SUCCEEDED,
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
    case LOCATION_DETAILS_EDIT_SUCCEEDED: {
      return {
        ...state,
        details: action.payload.data,
      };
    }
    case LOCATION_DETAILS_DELETE_SUCCEEDED: {
      return {
        ...state,
        details: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default locationDetails;
