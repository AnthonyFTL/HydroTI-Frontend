import isEmpty from "validator/es/lib/isEmpty";

export const validateName = (name) => {
  const errors = [];
  isEmpty(name) && errors.push("El nombre no debe ser nulo");
  return errors;
};

export const validate = (data) => {
  const nameErrors = validateName(data.name);

  return {
    hasError: nameErrors.length > 0,
    errors: {
      name: nameErrors,
    },
  };
};

// export default validate;
