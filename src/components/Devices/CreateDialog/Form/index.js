import { useState } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import OutlinedInput from "../../../Common/OutlinedInput";

import validate, { validateLocation, validateName } from "./validations";
import OutlinedSelect from "../../../Common/OutlinedSelect";

import Location from "../../../../model/location";

const CreateDevice = ({ id, onCreate, errors, setErrors, locations }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const onNameChange = (value) => {
    setName(value);
    const errors = validateName(value);
    setErrors((val) => ({ ...val, name: errors }));
  };

  const onLocationChange = (value) => {
    setLocation(value);
    const errors = validateLocation(value);
    setErrors((val) => ({ ...val, location: errors }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = validate({ name, location });

    if (!result.hasError) onCreate({ name, location });
    else setErrors((val) => ({ ...val, ...result.errors }));
  };

  return (
    <form id={id} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <OutlinedInput
            id="create-device-name"
            helperTextId="create-device-name-helper-text"
            label="Nombre"
            value={name}
            onChange={onNameChange}
            fullWidth
            hasError={errors.name.length > 0}
            errorMessage={errors.name[0]}
          />
        </Grid>
        <Grid item xs={12}>
          <OutlinedSelect
            id="create-device-location"
            helperTextId="create-device-location-helper-text"
            labelId="create-device-location-label"
            label="Ubicación"
            value={location}
            onChange={onLocationChange}
            fullWidth
            options={locations.map((location) => ({
              value: location.id.toString(),
              label: location.name,
            }))}
            hasError={errors.location.length > 0}
            errorMessage={errors.location[0]}
          />
        </Grid>
      </Grid>
    </form>
  );
};

CreateDevice.propTypes = {
  id: PropTypes.string.isRequired,
  onCreate: PropTypes.func,
  errors: PropTypes.object.isRequired,
  setErrors: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(PropTypes.instanceOf(Location)),
};

CreateDevice.defaultProps = {
  onCreate: () => {},
  locations: [],
};

export default CreateDevice;
