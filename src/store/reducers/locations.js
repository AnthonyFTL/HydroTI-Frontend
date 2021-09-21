import {
  LOCATIONS_CHANGE_FILTER_VALUE,
  LOCATIONS_CREATE_SUCCEEDED,
  LOCATIONS_FETCH_SUCCEEDED,
  LOCATIONS_RESET_STATE,
} from "../types/locations";

const initialState = {
  locations: [],
  filters: {
    name: "",
    district: "",
    state: "",
    connectedDevices: "",
  },
};

const locations = (state = initialState, action) => {
  switch (action.type) {
    case LOCATIONS_RESET_STATE: {
      return {
        ...initialState,
      };
    }
    case LOCATIONS_FETCH_SUCCEEDED: {
      return {
        ...state,
        locations: action.payload.data,
      };
    }
    case LOCATIONS_CHANGE_FILTER_VALUE: {
      return {
        ...state,
        filters: { ...state.filters, ...action.payload.data },
      };
    }
    case LOCATIONS_CREATE_SUCCEEDED: {
      return {
        ...state,
        locations: [...state.locations, action.payload.data],
      };
    }
    default: {
      return state;
    }
  }
};

export default locations;
