const initialState = {
  irrigations: [],
  filters: {
    name: "",
    district: "",
    state: "",
    irrigationType: "",
  },
};

const locations = (state = initialState, action) => {
  switch (action.type) {
    case "IRRIGATIONS_RESET_STATE": {
      return {
        ...initialState,
      };
    }
    case "IRRIGATIONS_FETCH_SUCCEEDED": {
      return {
        ...state,
        irrigations: action.payload.data,
      };
    }
    case "IRRIGATIONS_CHANGE_FILTER_VALUE": {
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

export default locations;
