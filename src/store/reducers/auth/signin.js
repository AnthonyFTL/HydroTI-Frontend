import { SIGN_IN_STARTED, SIGN_IN_SUCCEEDED } from "../../types/auth/signin";

const initialState = {
  isLoading: false,
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
    default: {
      return state;
    }
  }
};

export default signIn;
