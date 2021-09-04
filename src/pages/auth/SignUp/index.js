import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import SignUpForm from "../../../components/auth/SignUpForm";
import routes from "../../../router/routes";

import { requestSignUp } from "../../../store/actions/auth";
import AuthTemplate from "../../../hoc/templates/Auth";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = (data) =>
    dispatch(requestSignUp(data.email, data.password, data.role)).then(() =>
      history.push(routes.SIGN_IN)
    );

  return (
    <AuthTemplate>
      <SignUpForm onSignUp={onSignUp} />
    </AuthTemplate>
  );
};

export default SignUp;
