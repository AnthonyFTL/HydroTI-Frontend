import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import SignInForm from "../../../components/auth/SignInForm";
import routes from "../../../router/routes";

import { requestSignIn } from "../../../store/actions/auth";
import AuthTemplate from "../../../hoc/templates/Auth";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignIn = (data) =>
    dispatch(requestSignIn(data.email, data.password)).then(() =>
      history.push(routes.HOME)
    );

  return (
    <AuthTemplate>
      <SignInForm onSignIn={onSignIn} />
    </AuthTemplate>
  );
};

export default SignIn;
