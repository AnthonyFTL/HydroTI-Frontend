import { useState } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import OutlinedInput from "../../../Common/OutlinedInput";

import Device from "../../../../model/device";
import OutlinedSelect from "../../../Common/OutlinedSelect";
import deviceState from "../../../../model/deviceState";

import validate, {
  validateLocation,
  validateName,
  validateState,
} from "./validations";

const EditDevice = ({ id, device, onEdit, errors, setErrors }) => {
  const [name, setName] = useState(device.name);
  const [location, setLocation] = useState(device.location);
  const [state, setState] = useState(device.state);

  const onNameChange = (value) => {
    setName(value);
    const errors = validateName(value);
    setErrors((val) => ({ ...val, name: errors }));
  };

  const onStateChange = (value) => {
    setState(value);
    const errors = validateState(value);
    setErrors((val) => ({ ...val, state: errors }));
  };

  const onLocationChange = (value) => {
    setLocation(value);
    const errors = validateLocation(value);
    setErrors((val) => ({ ...val, location: errors }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = validate({ name, location, state });

    if (!result.hasError) onEdit({ id: device.id, name, location, state });
    else setErrors((val) => ({ ...val, ...result.errors }));
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
            onChange={onNameChange}
            fullWidth
            hasError={errors.name.length > 0}
            errorMessage={errors.name[0]}
          />
        </Grid>
        <Grid item xs={12}>
          <OutlinedInput
            id="edit-device-location"
            helperTextId="edit-device-location-helper-text"
            label="Ubicación"
            value={location}
            onChange={onLocationChange}
            fullWidth
            hasError={errors.location.length > 0}
            errorMessage={errors.location[0]}
          />
        </Grid>
        <Grid item xs={12}>
          <OutlinedSelect
            id="edit-device-state"
            helperTextId="edit-device-state-helper-text"
            labelId="edit-device-state-label"
            label="Estado"
            value={state}
            onChange={onStateChange}
            fullWidth
            options={[
              { value: deviceState.ACTIVE, label: "Activo" },
              { value: deviceState.DISCONNECTED, label: "Desconectado" },
              { value: deviceState.SUSPENDED, label: "Suspendido" },
            ]}
            hasError={errors.state.length > 0}
            errorMessage={errors.state[0]}
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
  errors: PropTypes.object.isRequired,
  setErrors: PropTypes.func.isRequired,
};

EditDevice.defaultProps = {
  onEdit: () => {},
};

export default EditDevice;
