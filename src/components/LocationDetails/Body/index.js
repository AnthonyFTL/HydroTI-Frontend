import Grid from "@material-ui/core/Grid";

import Details from "./Details";
import Map from "./Map";
import { Box } from "@material-ui/core";
import ConnectedDevices from "./ConnectedDevices";

const Body = () => (
  <Grid container spacing={4}>
    <Grid item xs={12} lg={5} xl={4}>
      <Map />
    </Grid>
    <Grid item xs={12} lg={7} xl={8}>
      <Details
        location="Urb. Residencial Lucyana"
        district="Carabayllo"
        lastTime="21/06/2021 - 15:23:45"
      />
      <Box marginTop={2}>
        <ConnectedDevices
          data={[{ id: "ardn-02", name: "regador principal prmt" }]}
        />
      </Box>
    </Grid>
  </Grid>
);

export default Body;
