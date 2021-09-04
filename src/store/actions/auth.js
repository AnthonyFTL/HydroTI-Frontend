import { signIn, signUp } from "../../services/auth/authService";
import { SIGN_UP_STARTED, SIGN_UP_SUCCEEDED } from "../types/auth/signup";
import { SIGN_IN_STARTED, SIGN_IN_SUCCEEDED } from "../types/auth/signin";
import { saveUserDetails } from "../../services/common/storageService";

export const requestSignUp = (data) => async (dispatch) => {
  dispatch({ type: SIGN_UP_STARTED });
  return signUp(data).then(() => dispatch({ type: SIGN_UP_SUCCEEDED }));
};

export const requestSignIn = (data) => async (dispatch) => {
  dispatch({ type: SIGN_IN_STARTED });
  return signIn(data).then((userDetails) => {
    dispatch({ type: SIGN_IN_SUCCEEDED });
    saveUserDetails(userDetails);
  });
};
