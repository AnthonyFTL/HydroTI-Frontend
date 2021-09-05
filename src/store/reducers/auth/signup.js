import {
  SIGN_UP_CLEAR_ERROR_MESSAGE,
  SIGN_UP_SHOW_ERROR_MESSAGE,
  SIGN_UP_STARTED,
  SIGN_UP_SUCCEEDED,
} from "../../types/auth/signup";

const initialState = {
  isLoading: false,
  error: null,
};

const signUp = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_STARTED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGN_UP_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SIGN_UP_SHOW_ERROR_MESSAGE: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case SIGN_UP_CLEAR_ERROR_MESSAGE: {
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

export default signUp;
