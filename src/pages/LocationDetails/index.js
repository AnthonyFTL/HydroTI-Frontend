import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";

import Header from "../../components/LocationDetails/Header";
import Body from "../../components/LocationDetails/Body";

import {
  editLocation,
  getLocationDetails,
  locationsDetailsResetState,
} from "../../store/actions/locationDetails";

import LocationDetailsModel from "../../model/locationDetails";

const LocationDetails = ({ details, dispatch }) => {
  useEffect(() => {
    dispatch(getLocationDetails());
    return () => dispatch(locationsDetailsResetState());
  }, []);

  if (!details) return null;

  return (
    <>
      <Box marginBottom={5}>
        <Header
          onArrowBackClick={() => history.goBack()}
          details={details}
          title={details.name}
          onEditClick={(data) => dispatch(editLocation(data))}
        />
      </Box>
      <Body location={details} />
    </>
  );
};

LocationDetails.propTypes = {
  details: PropTypes.instanceOf(LocationDetailsModel),
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  details: state.locationDetails.details,
});

export default connect(mapStateToProps)(LocationDetails);
