import isEmpty from "validator/es/lib/isEmpty";
import isEmail from "validator/es/lib/isEmail";
import isLength from "validator/es/lib/isLength";
import equals from "validator/es/lib/equals";
import matches from "validator/es/lib/matches";

export const validateRole = (role) => {
  const errors = [];
  isEmpty(role) && errors.push("Seleccione un rol");
  return errors;
};

export const validateName = (name) => {
  const errors = [];
  isEmpty(name) && errors.push("Ingrese nombre");
  !matches(name, /^[a-zA-Z\s]*$/) &&
    errors.push("El nombre solo puede contener letras");
  return errors;
};
export const validateLastname = (name) => {
  const errors = [];
  isEmpty(name) && errors.push("Ingrese apellidos");
  !matches(name, /^[a-zA-Z\s]*$/) &&
    errors.push("Los apellidos solo pueden contener letras");
  return errors;
};

export const validateEmail = (email) => {
  const errors = [];
  isEmpty(email) && errors.push("Ingrese correo electrónico");
  !isEmail(email) && errors.push("El formato del correo no es válido");
  return errors;
};

export const validatePassword = (password) => {
  const errors = [];
  isEmpty(password) && errors.push("Ingrese contraseña");
  !isLength(password, { min: 8, max: 14 }) &&
    errors.push("La contraseña debe tener entre 8 y 14 caracteres");
  !matches(password, /[$%&|<>#*!/¿?]/) &&
    errors.push("La contraseña debe incluir caracteres especiales");
  return errors;
};

export const validatePasswordConfirmation = (password, confirmation) => {
  const errors = [];
  !equals(password, confirmation) &&
    errors.push("Las contraseñas no coinciden ");
  return errors;
};

const validate = (data) => {
  const roleErrors = validateRole(data.role);
  const nameErrors = validateName(data.name);
  const lastnameErrors = validateLastname(data.lastname);
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
