import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import OutlinedInput from "../../Common/OutlinedInput";
import OutlinedSelect from "../../Common/OutlinedSelect";

import deviceState from "../../../model/deviceState";

const Filters = ({ values, onValueChange }) => {
  const setName = (value) => onValueChange({ name: value });
  const setLocation = (value) => onValueChange({ location: value });
  const setState = (value) => onValueChange({ state: value });

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} lg={4}>
        <OutlinedInput
          id="devices-filters-name"
          helperTextId="devices-filter-name-helper-text"
          label="Nombres"
          value={values.name}
          onChange={setName}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} lg={4}>
        <OutlinedInput
          id="devices-filters-location"
          helperTextId="devices-filter-location-helper-text"
          label="Ubicación"
          value={values.location}
          onChange={setLocation}
          fullWidth
        />
      </Grid>{" "}
      <Grid item xs={6} lg={4}>
        <OutlinedSelect
          id="devices-filters-state"
          helperTextId="devices-filter-state-helper-text"
          labelId="devices-filter-state-label"
          label="Estado"
          value={values.state}
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
  );
};

Filters.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
  onValueChange: PropTypes.func,
};

Filters.defaultProps = {
  onValueChange: () => {},
};

export default Filters;
