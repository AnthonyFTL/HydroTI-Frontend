import PropTypes from "prop-types";

import LocationDetails from "../../../model/locationDetails";

import Map from "../../Common/Map";
import Details from "./Details";

import Box from "@material-ui/core/Box";

const Body = ({ location }) => (
  <>
    <Box marginBottom={5}>
      <Details
        location={location.address}
        district={location.district}
        lastTime={location.lastTime}
      />
    </Box>
    <Box height={500}>
      <Map latitude={location.latitude} longitude={location.longitude} />
    </Box>
  </>
);

Body.propTypes = {
  location: PropTypes.instanceOf(LocationDetails).isRequired,
};

export default Body;
