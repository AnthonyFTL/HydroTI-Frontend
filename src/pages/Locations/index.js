import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Table from "../../components/Locations/Table";
import Filters from "../../components/Locations/Filters";
import Header from "../../components/Locations/Header";

import Box from "@material-ui/core/Box";

import {
  changeFilterValue,
  getLocations,
  locationsResetState,
} from "../../store/actions/locations";

import Location from "../../model/location";

const Locations = ({ data, filters, dispatch }) => {
  useEffect(() => {
    dispatch(getLocations());
    return () => dispatch(locationsResetState());
  }, []);

  const onFilterValueChange = (value) => {
    dispatch(changeFilterValue(value));
    dispatch(getLocations());
  };

  return (
    <>
      <Header onAddClick={() => console.log("add")} />
      <Box marginY={3}>
        <Filters values={filters} onValueChange={onFilterValueChange} />
      </Box>
      <Table data={data} />
    </>
  );
};

Locations.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Location)),
  filters: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

Locations.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({
  data: state.locations.locations,
  filters: state.locations.filters,
});

export default connect(mapStateToProps)(Locations);
