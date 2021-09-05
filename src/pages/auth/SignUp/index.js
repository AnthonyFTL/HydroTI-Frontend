import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import SignUpForm from "../../../components/auth/SignUpForm";
import AuthPageTemplate from "../../../hoc/templates/auth/AuthPageTemplate";
import SignUpConfirmation from "../../../components/auth/SignUpConfirmation";

import {
  closeError,
  requestSignUp,
  resetSignUpState,
} from "../../../store/actions/auth/signup";

const SignUp = ({ errorMessage, isLoading, dispatch }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => () => dispatch(resetSignUpState()), []);

  const onSignUp = (data) =>
    dispatch(requestSignUp(data)).then((succeeded) => {
      succeeded && setShowConfirmation(true);
    });

  const onErrorMessageClose = () => dispatch(closeError());

  return (
    <AuthPageTemplate
      errorMessage={errorMessage}
      onErrorMessageClose={onErrorMessageClose}
    >
      {showConfirmation ? (
        <SignUpConfirmation />
      ) : (
        <SignUpForm onSignUp={onSignUp} isLoading={isLoading} />
      )}
    </AuthPageTemplate>
  );
};

SignUp.propTypes = {
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { error, isLoading } = state.auth.signUp;
  return { errorMessage: error, isLoading };
};

export default connect(mapStateToProps)(SignUp);
