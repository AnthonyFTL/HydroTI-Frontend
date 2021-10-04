import { useState } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import OutlinedInput from "../../../Common/OutlinedInput";
import PlacesAutocomplete from "../../../Common/PlacesAutocomplete";

import LocationDetails from "../../../../model/locationDetails";

import { validate, validateName } from "./validations";

const Form = ({ id, onEdit, setErrors, errors, details }) => {
  const [locationName, setLocationName] = useState("");
  const [name, setName] = useState(details.name);
  const [place, setPlace] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validate({ name });
    if (!result.hasError) onEdit({ ...details, name, ...place });
    else setErrors((val) => ({ ...val, ...result.errors }));
  };

  const onNameChange = (value) => {
    setName(value);
    console.log("estuvo aqui");
    const errors = validateName(value);
    setErrors((val) => ({ ...val, name: errors }));
  };

  const onPlaceSelected = (completeAddress, placeData) => {
    setPlace(placeData);
    setLocationName(completeAddress);
  };

  const onLocationNameChange = (value) => {
    setLocationName(value);
    setPlace(null);
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
  onEdit: PropTypes.func,
  details: PropTypes.instanceOf(LocationDetails).isRequired,
  setErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

Form.defaultProps = {
  onEdit: () => {},
};

export default Form;
