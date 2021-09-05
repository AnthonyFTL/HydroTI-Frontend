import { useState } from "react";
import PropTypes from "prop-types";

import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import OutlinedInput from "../../Common/OutlinedInput";
import routes from "../../../router/routes";
import AuthFormTemplate from "../../../hoc/templates/auth/AuthFormTemplate";

const SignInForm = ({ onSignIn, isLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn({ email, password });
  };

  return (
    <AuthFormTemplate
      title="Sign In"
      submitText="Sign In"
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      footer={
        <Link to={routes.SIGN_UP}>
          <Typography variant="h6" align="center">
            Go to Sign Up
          </Typography>
        </Link>
      }
    >
      <OutlinedInput
        id="sign-in-email"
        helperTextId="sign-in-email-helper-text"
        label="Email"
        value={email}
        onChange={setEmail}
        fullWidth
      />
      <OutlinedInput
        id="sign-in-password"
        helperTextId="sign-in-password-helper-text"
        label="Password"
        value={password}
        onChange={setPassword}
        fullWidth
        type="password"
      />
    </AuthFormTemplate>
  );
};

SignInForm.propTypes = {
  onSignIn: PropTypes.func,
  isLoading: PropTypes.bool,
};

SignInForm.defaultProps = {
  onSignIn: () => {},
  isLoading: false,
};

export default SignInForm;
