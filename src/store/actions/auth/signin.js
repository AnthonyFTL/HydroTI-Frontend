import {
  SIGN_IN_CLEAR_ERROR_MESSAGE,
  SIGN_IN_SHOW_ERROR_MESSAGE,
  SIGN_IN_STARTED,
  SIGN_IN_SUCCEEDED,
} from "../../types/auth/signin";

import { signIn } from "../../../services/auth/authService";
import { saveUserDetails } from "../../../services/common/storageService";

export const requestSignIn = (data) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_IN_STARTED });
    const userDetails = await signIn(data);
    dispatch({ type: SIGN_IN_SUCCEEDED });
    saveUserDetails(userDetails);
    return true;
  } catch (error) {
    dispatch({ type: SIGN_IN_SHOW_ERROR_MESSAGE, payload: { error } });
    return false;
  }
};

export const closeError = () => ({
  type: SIGN_IN_CLEAR_ERROR_MESSAGE,
});
