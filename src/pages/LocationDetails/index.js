import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";

import Header from "../../components/LocationDetails/Header";
import Body from "../../components/LocationDetails/Body";

import {
  editLocation,
  deleteLocation,
  getLocationDetails,
  locationsDetailsResetState,
} from "../../store/actions/locationDetails";

import LocationDetailsModel from "../../model/locationDetails";

const LocationDetails = ({ details, dispatch }) => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getLocationDetails(id));
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
          onDeleteClick={() =>
            dispatch(deleteLocation(id)).then(() => history.goBack())
          }
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
