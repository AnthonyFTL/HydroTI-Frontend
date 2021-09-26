import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import OutlinedInput from "../../Common/OutlinedInput";
import OutlinedSelect from "../../Common/OutlinedSelect";

import irrigationState from "../../../model/irrigationState";

const Filters = ({ values, onValueChange }) => {
  const setName = (value) => onValueChange({ name: value });
  const setDistrict = (value) => onValueChange({ district: value });
  const setState = (value) => onValueChange({ state: value });
  const setType = (value) => onValueChange({ irrigationType: value });

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} lg={3}>
        <OutlinedInput
          id="irrigations-filters-name"
          helperTextId="irrigations-filter-name-helper-text"
          label="Nombre"
          value={values.name}
          onChange={setName}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <OutlinedInput
          id="irrigations-filters-district"
          helperTextId="irrigations-filter-district-helper-text"
          label="Distrito"
          value={values.district}
          onChange={setDistrict}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <OutlinedSelect
          id="irrigations-filters-state"
          helperTextId="irrigations-filter-state-helper-text"
          labelId="irrigations-filter-state-label"
          label="Estado"
          value={values.state}
          onChange={setState}
          fullWidth
          withDefaultOption
          options={[
            {
              value: irrigationState.IRRIGATION_IN_PROGRESS,
              label: "Riego en curso",
            },
            {
              value: irrigationState.SUSPENDED_IRRIGATION,
              label: "Riego suspendido",
            },
            {
              value: irrigationState.WITHOUT_CONNECTION,
              label: "Sin conexión",
            },
          ]}
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <OutlinedSelect
          id="irrigations-filters-type"
          helperTextId="irrigations-filter-type-helper-text"
          labelId="irrigations-filter-type-label"
          label="Tipo Riego"
          value={values.type}
          onChange={setType}
          fullWidth
          withDefaultOption
          options={[
            {
              value: "MANUAL",
              label: "MANUAL",
            },
            {
              value: "AUTOMATICO",
              label: "AUTOMATICO",
            },
          ]}
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
    type: PropTypes.string.isRequired,
  }).isRequired,
  onValueChange: PropTypes.func,
};

Filters.defaultProps = {
  onValueChange: () => {},
};

export default Filters;
