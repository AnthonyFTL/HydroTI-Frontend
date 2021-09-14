import { useState } from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

import OutlinedInput from "../../../Common/OutlinedInput";
import PlacesAutocomplete from "../../../Common/PlacesAutocomplete";

const Form = ({ id, onCreate }) => {
  const [locationInput, setLocationInput] = useState("");

  const [name, setName] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, ...selectedPlace });
  };

  const onPlaceSelected = (completeAddress, placeData) => {
    setSelectedPlace(placeData);
    setLocationInput(completeAddress);
  };

  const onLocationInputChange = (value) => {
    setLocationInput(value);
    setSelectedPlace(null);
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
            onChange={setName}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <PlacesAutocomplete
            id="locations-create-form-dialog-locations"
            helperTextId="locations-create-form-dialog-locations-helper-text"
            label="Ubicación"
            value={locationInput}
            onChange={onLocationInputChange}
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
  onCreate: PropTypes.func,
};

Form.defaultProps = {
  onCreate: () => {},
};

export default Form;
