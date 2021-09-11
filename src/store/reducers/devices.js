import {
  DEVICES_RESET_STATE,
  DEVICES_FETCH_SUCCEEDED,
  DEVICES_CHANGE_FILTER_VALUE,
} from "../types/devices";

const initialState = {
  locations: [],
  filters: {
    name: "",
    location: "",
    state: "",
  },
};

const devices = (state = initialState, action) => {
  switch (action.type) {
    case DEVICES_RESET_STATE: {
      return {
        ...initialState,
      };
    }
    case DEVICES_FETCH_SUCCEEDED: {
      return {
        ...state,
        locations: [...action.payload.data],
      };
    }
    case DEVICES_CHANGE_FILTER_VALUE: {
      return {
        ...state,
        filters: { ...state.filters, ...action.payload.data },
      };
    }
    default: {
      return state;
    }
  }
};

export default devices;
