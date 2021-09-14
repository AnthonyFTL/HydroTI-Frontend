import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Map from "../../Common/Map";
import Details from "./Details";
import ConnectedDevices from "./ConnectedDevices";

import LocationDetails from "../../../model/locationDetails";

const Body = ({ location }) => (
  <Grid container spacing={4}>
    <Grid item xs={12} lg={5}>
      <Box height={500}>
        <Map latitude={location.latitude} longitude={location.longitude} />
      </Box>
    </Grid>
    <Grid item xs={12} lg={7}>
      <Details
        location={location.location}
        district={location.district}
        lastTime={location.lastTime}
      />
      <Box marginY={2}>
        <hr />
      </Box>
      <ConnectedDevices data={location.connectedDevices} />
    </Grid>
  </Grid>
);

Body.propTypes = {
  location: PropTypes.instanceOf(LocationDetails).isRequired,
};

export default Body;
