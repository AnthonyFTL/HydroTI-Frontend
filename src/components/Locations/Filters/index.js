import { useState } from "react";

import Grid from "@material-ui/core/Grid";

import OutlinedInput from "../../Common/OutlinedInput";
import OutlinedSelect from "../../Common/OutlinedSelect";

import locationState from "../../../model/state";

const Filters = () => {
  const [name, setName] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [connectedDevices, setConnectedDevices] = useState("");

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} lg={3}>
        <OutlinedInput
          id="locations-filters-name"
          helperTextId="locations-filter-name-helper-text"
          label="Nombres"
          value={name}
          onChange={setName}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <OutlinedInput
          id="locations-filters-district"
          helperTextId="locations-filter-district-helper-text"
          label="Distrito"
          value={district}
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
          value={state}
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
          value={connectedDevices}
          onChange={setConnectedDevices}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default Filters;
