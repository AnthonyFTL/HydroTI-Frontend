import {
  LOCATIONS_CHANGE_FILTER_VALUE,
  LOCATIONS_CHANGE_STATE,
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
    case LOCATIONS_CHANGE_STATE: {
      return {
        ...state,
        locations: state.locations.map((location) => {
          if (location.id === action.payload.id) {
            const newLocation = Object.assign(
              Object.create(Object.getPrototypeOf(location)),
              location
            );
            return Object.assign(newLocation, { state: action.payload.state });
          }
          return location;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

export default locations;
