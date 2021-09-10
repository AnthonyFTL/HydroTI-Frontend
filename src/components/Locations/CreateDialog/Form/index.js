import { useState } from "react";
import PropTypes from "prop-types";

import { Box, Grid } from "@material-ui/core";

import OutlinedInput from "../../../Common/OutlinedInput";
import Map from "../../../Common/Map";

const Form = ({ id, onCreate }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name });
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
          <OutlinedInput
            id="locations-create-form-dialog-location"
            helperTextId="locations-create-form-dialog-location-helper-text"
            label="Ubicación"
            value={location}
            onChange={setLocation}
            fullWidth
          />
        </Grid>
      </Grid>
      <Box marginTop={2}>
        <Map />
      </Box>
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
