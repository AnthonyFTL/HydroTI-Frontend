import isEmpty from "validator/es/lib/isEmpty";

export const validateName = (name) => {
  const errors = [];
  isEmpty(name) && errors.push("Ingrese nombre del parque");
  return errors;
};

export const validateLocation = (locationName, place) => {
  const errors = [];
  isEmpty(locationName) && errors.push("Ingrese la ubicación del parque");
  place === null &&
    errors.push("Debe seleccionar una de las opciones disponibles");
  return errors;
};

const validate = (data) => {
  const nameErrors = validateName(data.name);
  const locationErrors = validateLocation(data.locationName, data.place);

  return {
    hasError: nameErrors.length > 0 || locationErrors.length > 0,
    errors: {
      name: nameErrors,
      location: locationErrors,
    },
  };
};

export default validate;
