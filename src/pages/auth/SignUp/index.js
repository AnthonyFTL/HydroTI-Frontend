import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import SignUpForm from "../../../components/auth/SignUpForm";
import routes from "../../../router/routes";

import { requestSignUp } from "../../../store/actions/auth";
import AuthPageTemplate from "../../../hoc/templates/auth/AuthPageTemplate";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = (data) =>
    dispatch(requestSignUp(data)).then(() => history.push(routes.SIGN_IN));

  return (
    <AuthPageTemplate>
      <SignUpForm onSignUp={onSignUp} />
    </AuthPageTemplate>
  );
};

export default SignUp;
