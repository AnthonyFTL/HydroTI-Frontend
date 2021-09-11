import { useState } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import OutlinedInput from "../../../Common/OutlinedInput";

import Device from "../../../../model/device";
import OutlinedSelect from "../../../Common/OutlinedSelect";
import deviceState from "../../../../model/deviceState";

const EditDevice = ({ id, device, onEdit }) => {
  const [name, setName] = useState(device.name);
  const [location, setLocation] = useState(device.location);
  const [state, setState] = useState(device.state);

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit({ id: device.id, name, location, state });
  };

  return (
    <form id={id} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <OutlinedInput
            id="edit-device-name"
            helperTextId="edit-device-name-helper-text"
            label="Nombre"
            value={name}
            onChange={setName}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <OutlinedInput
            id="edit-device-location"
            helperTextId="edit-device-location-helper-text"
            label="Ubicación"
            value={location}
            onChange={setLocation}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <OutlinedSelect
            id="edit-device-state"
            helperTextId="edit-device-state-helper-text"
            labelId="edit-device-state-label"
            label="Estado"
            value={state}
            onChange={setState}
            fullWidth
            options={[
              { value: deviceState.ACTIVE, label: "Activo" },
              { value: deviceState.DISCONNECTED, label: "Desconectado" },
              { value: deviceState.SUSPENDED, label: "Suspendido" },
            ]}
          />
        </Grid>
      </Grid>
    </form>
  );
};

EditDevice.propTypes = {
  id: PropTypes.string.isRequired,
  device: PropTypes.instanceOf(Device).isRequired,
  onEdit: PropTypes.func,
};

EditDevice.defaultProps = {
  onEdit: () => {},
};

export default EditDevice;
