import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import SignInForm from "../../../components/auth/SignInForm";

import { closeError, requestSignIn } from "../../../store/actions/auth/signin";
import AuthPageTemplate from "../../../hoc/templates/auth/AuthPageTemplate";
import routes from "../../../router/routes";

const SignIn = () => {
  const { error: errorMessage } = useSelector((state) => state.auth.signIn);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSignIn = (data) =>
    dispatch(requestSignIn(data)).then(
      (succeeded) => succeeded && history.push(routes.HOME)
    );

  const onErrorMessageClose = () => dispatch(closeError());

  return (
    <AuthPageTemplate
      errorMessage={errorMessage}
      onErrorMessageClose={onErrorMessageClose}
    >
      <SignInForm onSignIn={onSignIn} />
    </AuthPageTemplate>
  );
};

export default SignIn;
