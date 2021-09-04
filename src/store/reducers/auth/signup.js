import { SIGN_UP_STARTED, SIGN_UP_SUCCEEDED } from "../../types/auth/signup";

const initialState = {
  isLoading: false,
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
    default: {
      return state;
    }
  }
};

export default signUp;
