import { useEffect } from "react";
import { connect } from "react-redux";

import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

import Table from "../../components/Devices/Table";
import Filters from "../../components/Devices/Filters";
import Header from "../../components/Devices/Header";
import Device from "../../model/device";

import {
  changeFilterValue,
  getDevices,
  devicesResetState,
} from "../../store/actions/devices";

const Devices = ({ data, filters, dispatch }) => {
  useEffect(() => {
    dispatch(getDevices());
    return () => dispatch(devicesResetState());
  }, []);

  const onFilterValueChange = (value) => {
    dispatch(changeFilterValue(value));
    dispatch(getDevices());
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

Devices.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Device)),
  filters: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

Devices.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({
  data: state.devices.locations,
  filters: state.devices.filters,
});

export default connect(mapStateToProps)(Devices);
