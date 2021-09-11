import isEmpty from "validator/es/lib/isEmpty";

export const validateName = (name) => {
  const errors = [];
  isEmpty(name) && errors.push("Ingrese nombre del dispositivo");
  return errors;
};

export const validateLocation = (location) => {
  const errors = [];
  isEmpty(location) && errors.push("Ingrese ubicación del dispositivo");
  return errors;
};

export const validateState = (state) => {
  const errors = [];
  isEmpty(state) && errors.push("Ingrese estado del dispositivo");
  return errors;
};

const validate = (data) => {
  const nameErrors = validateName(data.name);
  const locationErrors = validateLocation(data.location);
  const stateErrors = validateState(data.state);

  return {
    hasError:
      nameErrors.length > 0 ||
      locationErrors.length > 0 ||
      stateErrors.length > 0,
    errors: {
      name: nameErrors,
      location: locationErrors,
      state: stateErrors,
    },
  };
};

export default validate;
