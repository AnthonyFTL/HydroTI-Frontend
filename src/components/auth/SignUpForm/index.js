import { useState } from "react";
import PropTypes from "prop-types";

import RoleRadioButtons from "../RoleRadioButtons";
import OutlinedInput from "../../Common/OutlinedInput";
import routes from "../../../router/routes";
import AuthFormTemplate from "../../../hoc/auth/AuthFormTemplate";

import validate, {
  validateName,
  validateRole,
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
  validateLastname,
} from "./validations";

const initialErrors = {
  role: [],
  name: [],
  lastname: [],
  email: [],
  password: [],
  passwordConfirmation: [],
};

const SignUpForm = ({ onSignUp, isLoading }) => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [errors, setErrors] = useState(initialErrors);

  const onRoleChange = (value) => {
    setRole(value);
    const roleErrors = validateRole(value);
    setErrors((val) => ({ ...val, role: roleErrors }));
  };

  const onNameChange = (value) => {
    setName(value);
    const nameErrors = validateName(value);
    setErrors((val) => ({ ...val, name: nameErrors }));
  };

  const onLastnameChange = (value) => {
    setLastname(value);
    const lastnameErrors = validateLastname(value);
    setErrors((val) => ({ ...val, lastname: lastnameErrors }));
  };

  const onPasswordChange = (value) => {
    setPassword(value);
    const passwordErrors = validatePassword(value);
    setErrors((val) => ({ ...val, password: passwordErrors }));
  };

  const onEmailChange = (value) => {
    setEmail(value);
    const emailErrors = validateEmail(value);
    setErrors((val) => ({ ...val, email: emailErrors }));
  };

  const onPasswordConfirmationChange = (value) => {
    setPasswordConfirmation(value);
    const passwordConfirmationErrors = validatePasswordConfirmation(
      password,
      value
    );
    setErrors((val) => ({
      ...val,
      passwordConfirmation: passwordConfirmationErrors,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = validate({
      role,
      name,
      lastname,
      email,
      password,
      passwordConfirmation,
    });

    if (!result.hasError) onSignUp({ role, name, lastname, email, password });
    else setErrors((val) => ({ ...val, ...result.errors }));
  };

  return (
    <AuthFormTemplate
      title="Registro Nuevo Usuario"
      submitText="Registrar"
      linkText="Iniciar Sesi??n"
      linkTo={routes.SIGN_IN}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      disabled={Object.values(errors).some((e) => e.length > 0)}
    >
      <RoleRadioButtons
        value={role}
        onChange={onRoleChange}
        hasError={errors.role.length > 0}
        errorMessage={errors.role[0]}
      />
      <OutlinedInput
        id="sign-up-name"
        helperTextId="sign-up-name-helper-text"
        label="Nombres"
        value={name}
        onChange={onNameChange}
        fullWidth
        hasError={errors.name.length > 0}
        errorMessage={errors.name[0]}
      />
      <OutlinedInput
        id="sign-up-lastname"
        helperTextId="sign-up-lastname-helper-text"
        label="Apellidos"
        value={lastname}
        onChange={onLastnameChange}
        fullWidth
        hasError={errors.lastname.length > 0}
        errorMessage={errors.lastname[0]}
      />
      <OutlinedInput
        id="sign-up-email"
        helperTextId="sign-up-email-helper-text"
        label="Correo electr??nico"
        value={email}
        onChange={onEmailChange}
        fullWidth
        hasError={errors.email.length > 0}
        errorMessage={errors.email[0]}
      />
      <OutlinedInput
        id="sign-up-password"
        helperTextId="sign-up-password-helper-text"
        label="Contrase??a"
        value={password}
        onChange={onPasswordChange}
        fullWidth
        type="password"
        hasError={errors.password.length > 0}
        errorMessage={errors.password[0]}
      />
      <OutlinedInput
        id="sign-up-password-confirmation"
        helperTextId="sign-up-password-confirmation-helper-text"
        label="Confirmar contrase??a"
        value={passwordConfirmation}
        onChange={onPasswordConfirmationChange}
        fullWidth
        type="password"
        hasError={errors.passwordConfirmation.length > 0}
        errorMessage={errors.passwordConfirmation[0]}
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
