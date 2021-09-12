import { useEffect, useState } from "react";
import { connect } from "react-redux";

import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

import Table from "../../components/Devices/Table";
import Filters from "../../components/Devices/Filters";
import Header from "../../components/Devices/Header";
import EditDialog from "../../components/Devices/EditDialog";
import CreateDialog from "../../components/Devices/CreateDialog";

import Device from "../../model/device";
import Location from "../../model/location";

import {
  changeFilterValue,
  getDevices,
  devicesResetState,
  startEdit,
  endEdit,
  createDevice,
  editDevice,
  deleteDevice,
} from "../../store/actions/devices";

import {
  getLocations,
  locationsResetState,
} from "../../store/actions/locations";

const Devices = ({ data, editingDevice, filters, locations, dispatch }) => {
  const [createDialogIsOpen, setCreateDialogIsOpen] = useState();

  useEffect(() => {
    dispatch(getDevices());
    return () => dispatch(devicesResetState());
  }, []);

  const onFilterValueChange = (value) => {
    dispatch(changeFilterValue(value));
    dispatch(getDevices());
  };

  const onEditDialogClose = () => {
    dispatch(endEdit());
    dispatch(locationsResetState());
  };

  const onCreateDialogClose = () => {
    setCreateDialogIsOpen(false);
    dispatch(locationsResetState());
  };

  const onEditDialogOpen = (id) =>
    dispatch(getLocations()).then(() => dispatch(startEdit(id)));

  const onEditDevice = (data) =>
    dispatch(editDevice(data)).then(() => onEditDialogClose());

  const onCreateDialogOpen = () =>
    dispatch(getLocations()).then(() => setCreateDialogIsOpen(true));

  const onCreateDevice = (data) =>
    dispatch(createDevice(data)).then(() => onCreateDialogClose());

  return (
    <>
      <Header onAddClick={onCreateDialogOpen} />
      <Box marginY={3}>
        <Filters values={filters} onValueChange={onFilterValueChange} />
      </Box>
      <Table
        data={data}
        onEditClick={onEditDialogOpen}
        onDeleteClick={(id) => dispatch(deleteDevice(id))}
      />
      <EditDialog
        device={editingDevice}
        open={Boolean(editingDevice)}
        onClose={onEditDialogClose}
        onEdit={onEditDevice}
        locations={locations}
      />
      <CreateDialog
        open={createDialogIsOpen}
        onClose={onCreateDialogClose}
        onCreate={onCreateDevice}
        locations={locations}
      />
    </>
  );
};

Devices.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Device)),
  editingDevice: PropTypes.instanceOf(Device),
  filters: PropTypes.object.isRequired,
  locations: PropTypes.arrayOf(PropTypes.instanceOf(Location)),
  dispatch: PropTypes.func.isRequired,
};

Devices.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({
  data: state.devices.devices,
  editingDevice: state.devices.editingDevice,
  filters: state.devices.filters,
  locations: state.locations.locations,
});

export default connect(mapStateToProps)(Devices);
