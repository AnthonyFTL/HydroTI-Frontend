import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import OutlinedInput from "../../Common/OutlinedInput";
import OutlinedSelect from "../../Common/OutlinedSelect";

import locationState from "../../../model/state";

const Filters = ({ values, onValueChange }) => {
  const setName = (value) => onValueChange({ name: value });
  const setDistrict = (value) => onValueChange({ district: value });
  const setState = (value) => onValueChange({ state: value });
  const setConnectedDevices = (value) =>
    onValueChange({ connectedDevices: value });

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} lg={3}>
        <OutlinedInput
          id="locations-filters-name"
          helperTextId="locations-filter-name-helper-text"
          label="Nombres"
          value={values.name}
          onChange={setName}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <OutlinedInput
          id="locations-filters-district"
          helperTextId="locations-filter-district-helper-text"
          label="Distrito"
          value={values.district}
          onChange={setDistrict}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <OutlinedSelect
          id="locations-filters-state"
          helperTextId="locations-filter-state-helper-text"
          labelId="locations-filter-state-label"
          label="Estado"
          value={values.state}
          onChange={setState}
          fullWidth
          options={[
            { value: locationState.ACTIVE, label: "Activo" },
            { value: locationState.DISCONNECTED, label: "Desconectado" },
            { value: locationState.SUSPENDED, label: "Suspendido" },
          ]}
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <OutlinedInput
          type="number"
          id="locations-filters-connected-devices"
          helperTextId="locations-filter-connected-devices-helper-text"
          label="Dispositivos conectados"
          value={values.connectedDevices}
          onChange={setConnectedDevices}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

Filters.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    connectedDevices: PropTypes.string.isRequired,
  }).isRequired,
  onValueChange: PropTypes.func,
};

Filters.defaultProps = {
  onValueChange: () => {},
};

export default Filters;
