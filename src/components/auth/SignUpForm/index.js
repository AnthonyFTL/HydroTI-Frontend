import { useState } from "react";
import PropTypes from "prop-types";

import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import RoleRadioButtons from "../RoleRadioButtons";
import OutlinedInput from "../../Common/OutlinedInput";
import routes from "../../../router/routes";
import AuthFormTemplate from "../../../hoc/templates/auth/AuthFormTemplate";

const SignUpForm = ({ onSignUp, isLoading }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({ name, lastname, role, email, password });
  };

  return (
    <AuthFormTemplate
      title="Sign Up"
      submitText="Sign Up"
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      footer={
        <Link to={routes.SIGN_IN}>
          <Typography variant="h6" align="center">
            Go to Sign In
          </Typography>
        </Link>
      }
    >
      <RoleRadioButtons value={role} onChange={setRole} />
      <OutlinedInput
        id="sign-up-name"
        helperTextId="sign-up-name-helper-text"
        label="Name"
        value={name}
        onChange={setName}
        fullWidth
      />
      <OutlinedInput
        id="sign-up-lastname"
        helperTextId="sign-up-lastname-helper-text"
        label="Last name"
        value={lastname}
        onChange={setLastname}
        fullWidth
      />
      <OutlinedInput
        id="sign-up-email"
        helperTextId="sign-up-email-helper-text"
        label="Email"
        value={email}
        onChange={setEmail}
        fullWidth
      />
      <OutlinedInput
        id="sign-up-password"
        helperTextId="sign-up-password-helper-text"
        label="Password"
        value={password}
        onChange={setPassword}
        fullWidth
        type="password"
      />
      <OutlinedInput
        id="sign-up-password-confirmation"
        helperTextId="sign-up-password-confirmation-helper-text"
        label="Password confirmation"
        value={passwordConfirmation}
        onChange={setPasswordConfirmation}
        fullWidth
        type="password"
      />
    </AuthFormTemplate>
  );
};

SignUpForm.propTypes = {
  onSignUp: PropTypes.func,
  isLoading: PropTypes.bool,
};

SignUpForm.defaultProps = {
  onSignUp: () => {},
  isLoading: false,
};

export default SignUpForm;
