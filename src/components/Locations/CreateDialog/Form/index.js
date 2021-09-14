import { useState } from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

import OutlinedInput from "../../../Common/OutlinedInput";
import PlacesAutocomplete from "../../../Common/PlacesAutocomplete";

import validate, { validateLocation, validateName } from "./validations";

const Form = ({ id, onCreate, errors, setErrors }) => {
  const [locationName, setLocationName] = useState("");

  const [name, setName] = useState("");
  const [place, setPlace] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = validate({ name, locationName, place });

    if (!result.hasError) onCreate({ name, ...place });
    else setErrors((val) => ({ ...val, ...result.errors }));
  };

  const onPlaceSelected = (completeAddress, placeData) => {
    setPlace(placeData);
    setLocationName(completeAddress);

    const errors = validateLocation(completeAddress, placeData);
    setErrors((val) => ({ ...val, location: errors }));
  };

  const onNameChange = (value) => {
    setName(value);
    const errors = validateName(value);
    setErrors((val) => ({ ...val, name: errors }));
  };

  const onLocationNameChange = (value) => {
    setLocationName(value);
    setPlace(null);

    const errors = validateLocation(value, null);
    setErrors((val) => ({ ...val, location: errors }));
  };

  return (
    <form id={id} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <OutlinedInput
            id="locations-create-form-dialog-name"
            helperTextId="locations-create-form-dialog-name-helper-text"
            label="Nombre"
            value={name}
            onChange={onNameChange}
            fullWidth
            hasError={errors.name.length > 0}
            errorMessage={errors.name[0]}
          />
        </Grid>
        <Grid item xs={12}>
          <PlacesAutocomplete
            id="locations-create-form-dialog-locations"
            helperTextId="locations-create-form-dialog-locations-helper-text"
            label="Ubicación"
            value={locationName}
            onChange={onLocationNameChange}
            fullWidth
            hasError={errors.location.length > 0}
            errorMessage={errors.location[0]}
            onPlaceSelected={onPlaceSelected}
            options={{
              types: ["address"],
              componentRestrictions: { country: "pe" },
            }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  onCreate: PropTypes.func,
  errors: PropTypes.bool.isRequired,
  setErrors: PropTypes.func.isRequired,
};

Form.defaultProps = {
  onCreate: () => {},
};

export default Form;
