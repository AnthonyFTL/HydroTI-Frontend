import { signIn, signUp } from "../../services/auth/authService";
import { SIGN_UP_STARTED, SIGN_UP_SUCCEEDED } from "../types/auth/signup";
import { SIGN_IN_STARTED, SIGN_IN_SUCCEEDED } from "../types/auth/signin";
import { saveUserDetails } from "../../services/common/storageService";

export const requestSignUp = (email, password, role) => async (dispatch) => {
  dispatch({ type: SIGN_UP_STARTED });
  return signUp(email, password, role).then(() =>
    dispatch({ type: SIGN_UP_SUCCEEDED })
  );
};

export const requestSignIn = (email, password) => async (dispatch) => {
  dispatch({ type: SIGN_IN_STARTED });
  return signIn(email, password).then((userDetails) => {
    dispatch({ type: SIGN_IN_SUCCEEDED });
    saveUserDetails(userDetails);
  });
};
