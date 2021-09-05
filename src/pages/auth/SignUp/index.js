import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import SignUpForm from "../../../components/auth/SignUpForm";

import { closeError, requestSignUp } from "../../../store/actions/auth/signup";
import AuthPageTemplate from "../../../hoc/templates/auth/AuthPageTemplate";
import routes from "../../../router/routes";

const SignUp = () => {
  const { error: errorMessage } = useSelector((state) => state.auth.signUp);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = (data) =>
    dispatch(requestSignUp(data)).then(
      (succeeded) => succeeded && history.push(routes.SIGN_IN)
    );

  const onErrorMessageClose = () => dispatch(closeError());

  return (
    <AuthPageTemplate
      errorMessage={errorMessage}
      onErrorMessageClose={onErrorMessageClose}
    >
      <SignUpForm onSignUp={onSignUp} />
    </AuthPageTemplate>
  );
};

export default SignUp;
