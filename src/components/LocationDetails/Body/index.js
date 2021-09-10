import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Map from "../../Common/Map";
import Details from "./Details";
import ConnectedDevices from "./ConnectedDevices";

import LocationDetails from "../../../model/locationDetails";

const Body = ({ location }) => (
  <Grid container spacing={4}>
    <Grid item xs={12} lg={5} xl={4}>
      <Map />
    </Grid>
    <Grid item xs={12} lg={7} xl={8}>
      <Details
        location={location.location}
        district={location.district}
        lastTime={location.lastTime}
      />
      <Box marginTop={2}>
        <ConnectedDevices data={location.connectedDevices} />
      </Box>
    </Grid>
  </Grid>
);

Body.propTypes = {
  location: PropTypes.instanceOf(LocationDetails).isRequired,
};

export default Body;
