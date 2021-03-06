import { useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import Table from "../../components/Devices/Table";

import Header from "../../components/Devices/Header";

import Device from "../../model/device";

import { getDevices, devicesResetState } from "../../store/actions/devices";
import Box from "@material-ui/core/Box";

const Devices = ({ data, dispatch }) => {
  useEffect(() => {
    dispatch(getDevices());
    return () => dispatch(devicesResetState());
  }, []);

  return (
    <>
      <Header />
      <Box marginTop={3}>
        <Table data={data} />
      </Box>
    </>
  );
};

Devices.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Device)),
  dispatch: PropTypes.func.isRequired,
};

Devices.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({
  data: state.devices.devices,
});

export default connect(mapStateToProps)(Devices);
