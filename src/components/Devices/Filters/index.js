import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import OutlinedInput from "../../Common/OutlinedInput";
import OutlinedSelect from "../../Common/OutlinedSelect";

import locationState from "../../../model/state";

const Filters = ({ values, onValueChange }) => {
  const setName = (value) => onValueChange({ name: value });
  const setState = (value) => onValueChange({ state: value });

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} lg={3}>
        <OutlinedInput
          id="devices-filters-name"
          helperTextId="devices-filter-name-helper-text"
          label="Nombres"
          value={values.name}
          onChange={setName}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <OutlinedSelect
          id="devices-filters-state"
          helperTextId="devices-filter-state-helper-text"
          labelId="devices-filter-state-label"
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
    </Grid>
  );
};

Filters.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
  onValueChange: PropTypes.func,
};

Filters.defaultProps = {
  onValueChange: () => {},
};

export default Filters;
