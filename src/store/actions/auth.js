import { signUp } from "../../services/auth/authService";
import { SIGN_UP_STARTED, SIGN_UP_SUCCEEDED } from "../types/auth/signup";

export const requestSignUp = (email, password, role) => async (dispatch) => {
  dispatch({ type: SIGN_UP_STARTED });
  return signUp(email, password, role).then(() =>
    dispatch({ type: SIGN_UP_SUCCEEDED })
  );
};
