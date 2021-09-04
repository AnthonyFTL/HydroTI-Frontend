const initialState = {
  message: null,
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MESSAGE": {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    default: {
      return state;
    }
  }
};

export default message;
