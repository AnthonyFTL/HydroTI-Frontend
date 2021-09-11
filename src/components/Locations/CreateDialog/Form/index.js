import { useState } from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

import OutlinedInput from "../../../Common/OutlinedInput";
import PlacesAutocomplete from "../../../Common/PlacesAutocomplete";

const Form = ({ id, onCreate }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name });
  };

  const onPlaceSelected = (place) => console.log(place);

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
            id="places"
            label="places"
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
