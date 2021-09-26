import { useState } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import OutlinedInput from "../../../Common/OutlinedInput";
import PlacesAutocomplete from "../../../Common/PlacesAutocomplete";

import LocationDetails from "../../../../model/locationDetails";

const Form = ({ id, onEdit, details }) => {
  const [locationName, setLocationName] = useState("");

  const [name, setName] = useState(details.name);
  const [place, setPlace] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    onEdit({ ...details, name, ...place });
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
            onChange={setName}
            fullWidth
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
};

Form.defaultProps = {
  onEdit: () => {},
};

export default Form;
