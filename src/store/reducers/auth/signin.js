import {
  SIGN_IN_CLEAR_ERROR_MESSAGE,
  SIGN_IN_SHOW_ERROR_MESSAGE,
  SIGN_IN_STARTED,
  SIGN_IN_SUCCEEDED,
} from "../../types/auth/signin";

const initialState = {
  isLoading: false,
  error: null,
};

const signIn = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_STARTED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGN_IN_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SIGN_IN_SHOW_ERROR_MESSAGE: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case SIGN_IN_CLEAR_ERROR_MESSAGE: {
      return {
        ...state,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default signIn;
