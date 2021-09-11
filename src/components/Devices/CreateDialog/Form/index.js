import { useState } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import OutlinedInput from "../../../Common/OutlinedInput";

const CreateDevice = ({ id, onCreate }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate({ name, location });
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
            onChange={setName}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <OutlinedInput
            id="create-device-location"
            helperTextId="create-device-location-helper-text"
            label="Ubicación"
            value={location}
            onChange={setLocation}
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  );
};

CreateDevice.propTypes = {
  id: PropTypes.string.isRequired,
  onCreate: PropTypes.func,
};

CreateDevice.defaultProps = {
  onCreate: () => {},
};

export default CreateDevice;
