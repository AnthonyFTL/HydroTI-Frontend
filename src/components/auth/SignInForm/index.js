import { useState } from "react";
import PropTypes from "prop-types";

import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import OutlinedInput from "../../Common/OutlinedInput";
import routes from "../../../router/routes";
import AuthFormTemplate from "../../../hoc/templates/auth/AuthFormTemplate";

import validate, { validateEmail, validatePassword } from "./validations";

const initialErrors = { email: [], password: [] };

const SignInForm = ({ onSignIn, isLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState(initialErrors);

  const onEmailChange = (value) => {
    setEmail(value);
    const errors = validateEmail(value);
    setErrors((val) => ({ ...val, email: errors }));
  };

  const onPasswordChange = (value) => {
    setPassword(value);
    const errors = validatePassword(value);
    setErrors((val) => ({ ...val, password: errors }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = validate({ email, password });

    if (!result.hasError) onSignIn({ email, password });
    else setErrors((val) => ({ ...val, ...result.errors }));
  };

  return (
    <AuthFormTemplate
      title="Iniciar Sesión"
      submitText="Ingresar"
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      disabled={Object.values(errors).some((e) => e.length > 0)}
      footer={
        <Link to={routes.SIGN_UP}>
          <Typography variant="h6" align="center">
            Regístrate
          </Typography>
        </Link>
      }
    >
      <OutlinedInput
        id="sign-in-email"
        helperTextId="sign-in-email-helper-text"
        label="Correo electrónico"
        value={email}
        onChange={onEmailChange}
        fullWidth
        hasError={errors.email.length > 0}
        errorMessage={errors.email[0]}
      />
      <OutlinedInput
        id="sign-in-password"
        helperTextId="sign-in-password-helper-text"
        label="Contraseña"
        value={password}
        onChange={onPasswordChange}
        fullWidth
        type="password"
        hasError={errors.password.length > 0}
        errorMessage={errors.password[0]}
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
