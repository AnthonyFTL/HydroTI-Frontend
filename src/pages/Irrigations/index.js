import { useEffect } from "react";
import Header from "../../components/Irrigations/Header";
import Box from "@material-ui/core/Box";
import Filters from "../../components/Irrigations/Filters";
import PropTypes from "prop-types";

import Table from "../../components/Irrigations/Table";
import { connect } from "react-redux";

import {
  changeFilterValue,
  // getIrrigations,
  irrigationsResetState,
} from "../../store/actions/irrigations";

const Irrigations = ({ data, filters, dispatch }) => {
  useEffect(() => {
    // dispatch(getIrrigations());
    return () => dispatch(irrigationsResetState());
  });

  const onFilterValueChange = (value) => {
    dispatch(changeFilterValue(value));
    // dispatch(getIrrigations());
  };

  return (
    <>
      <Header />
      <Box>
        <Filters values={filters} onValueChange={onFilterValueChange} />
      </Box>
      <Table data={data} />
    </>
  );
};

Irrigations.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Location)),
  filters: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

Irrigations.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({
  data: state.irrigations.irrigations,
  filters: state.irrigations.filters,
});

export default connect(mapStateToProps)(Irrigations);
