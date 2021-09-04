import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import SignUpForm from "../../../components/auth/SignUpForm";
import routes from "../../../router/routes";

import { requestSignUp } from "../../../store/actions/auth";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = (data) =>
    dispatch(requestSignUp(data.email, data.password, data.role)).then(() =>
      history.push(routes.SIGN_IN)
    );

  return <SignUpForm onSignUp={onSignUp} />;
};

export default SignUp;
