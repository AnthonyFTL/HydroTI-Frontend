import {
  SIGN_UP_STARTED,
  SIGN_UP_SUCCEEDED,
  SIGN_UP_SHOW_ERROR_MESSAGE,
  SIGN_UP_CLEAR_ERROR_MESSAGE,
  SIGN_UP_FAILED,
  SIGN_UP_RESET_STATE,
} from "../../types/auth/signup";

import { signUp } from "../../../services/auth/authService";

export const requestSignUp = (data) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_UP_STARTED });
    await signUp(data);
    dispatch({ type: SIGN_UP_SUCCEEDED });
    return true;
  } catch (error) {
    dispatch({ type: SIGN_UP_FAILED });
    dispatch({ type: SIGN_UP_SHOW_ERROR_MESSAGE, payload: { error } });
    return false;
  }
};

export const closeError = () => ({
  type: SIGN_UP_CLEAR_ERROR_MESSAGE,
});

export const resetSignUpState = () => ({
  type: SIGN_UP_RESET_STATE,
});
