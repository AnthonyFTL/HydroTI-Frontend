import isEmpty from "validator/es/lib/isEmpty";
import isEmail from "validator/es/lib/isEmail";
import isAlpha from "validator/es/lib/isAlpha";
import isLength from "validator/es/lib/isLength";
import equals from "validator/es/lib/equals";
import matches from "validator/es/lib/matches";

export const validateRole = (role) => {
  const errors = [];
  isEmpty(role) && errors.push("The role field is required");
  return errors;
};

export const validateName = (name) => {
  const errors = [];
  isEmpty(name) && errors.push("The name field is required");
  !isAlpha(name) && errors.push("The name must contain only letters");
  return errors;
};

export const validateEmail = (email) => {
  const errors = [];
  isEmpty(email) && errors.push("The email field is required");
  !isEmail(email) && errors.push("The email format is not valid");
  return errors;
};

export const validatePassword = (password) => {
  const errors = [];
  isEmpty(password) && errors.push("The password field is required");
  !isLength(password, { min: 8, max: 14 }) &&
    errors.push(
      "The password must have at least 8 characters and 14 characters at most"
    );
  !matches(password, /[$%&|<>#*!]/) &&
    errors.push("the password must include especial characters");
  return errors;
};

export const validatePasswordConfirmation = (password, confirmation) => {
  const errors = [];
  !equals(password, confirmation) && errors.push("The passwords don't match");
  return errors;
};

const validate = (data) => {
  const roleErrors = validateRole(data.role);
  const nameErrors = validateName(data.name);
  const lastnameErrors = validateName(data.lastname);
  const emailErrors = validateEmail(data.email);
  const passwordErrors = validatePassword(data.password);
  const confirmationErrors = validatePasswordConfirmation(
    data.password,
    data.passwordConfirmation
  );

  return {
    hasError:
      roleErrors.length > 0 ||
      nameErrors.length > 0 ||
      lastnameErrors.length > 0 ||
      emailErrors.length > 0 ||
      passwordErrors.length > 0 ||
      confirmationErrors.length > 0,
    errors: {
      role: roleErrors,
      name: nameErrors,
      lastname: lastnameErrors,
      email: emailErrors,
      password: passwordErrors,
      passwordConfirmation: confirmationErrors,
    },
  };
};

export default validate;
