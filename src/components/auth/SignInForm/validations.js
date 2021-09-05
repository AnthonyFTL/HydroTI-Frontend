import isEmpty from "validator/es/lib/isEmpty";
import isEmail from "validator/es/lib/isEmail";

export const validateEmail = (email) => {
  const errors = [];
  isEmpty(email) && errors.push("The email field is required");
  !isEmail(email) && errors.push("The email format is not valid");
  return errors;
};
export const validatePassword = (password) => {
  const errors = [];
  isEmpty(password) && errors.push("The password field is required");
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
