import isEmpty from "validator/es/lib/isEmpty";

export const validateEmail = (email) => {
  const errors = [];
  isEmpty(email) && errors.push("Ingrese correo electrónico");
  return errors;
};
export const validatePassword = (password) => {
  const errors = [];
  isEmpty(password) && errors.push("Ingrese contraseña");
  return errors;
};

const validate = (data) => {
  const emailErrors = validateEmail(data.email);
  const passwordErrors = validatePassword(data.password);

  return {
    hasError: emailErrors.length > 0 || passwordErrors.length > 0,
    errors: {
      email: emailErrors,
      password: passwordErrors,
    },
  };
};

export default validate;
