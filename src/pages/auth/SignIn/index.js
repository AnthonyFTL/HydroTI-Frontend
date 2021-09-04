import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import SignInForm from "../../../components/auth/SignInForm";
import routes from "../../../router/routes";

import { requestSignIn } from "../../../store/actions/auth";
import AuthPageTemplate from "../../../hoc/templates/auth/AuthPageTemplate";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignIn = (data) =>
    dispatch(requestSignIn(data)).then(() => history.push(routes.HOME));

  return (
    <AuthPageTemplate>
      <SignInForm onSignIn={onSignIn} />
    </AuthPageTemplate>
  );
};

export default SignIn;
