import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import SignInForm from "../../../components/auth/SignInForm";
import AuthPageTemplate from "../../../hoc/templates/auth/AuthPageTemplate";
import routes from "../../../router/routes";

import {
  closeError,
  requestSignIn,
  resetSignInState,
} from "../../../store/actions/auth/signin";

const SignIn = ({ errorMessage, isLoading, dispatch }) => {
  const history = useHistory();

  useEffect(() => () => dispatch(resetSignInState()), []);

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
      <SignInForm onSignIn={onSignIn} isLoading={isLoading} />
    </AuthPageTemplate>
  );
};

SignIn.propTypes = {
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { error, isLoading } = state.auth.signIn;
  return { errorMessage: error, isLoading };
};

export default connect(mapStateToProps)(SignIn);
