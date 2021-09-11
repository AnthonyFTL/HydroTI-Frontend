import { useEffect, useState } from "react";
import { connect } from "react-redux";

import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

import Table from "../../components/Devices/Table";
import Filters from "../../components/Devices/Filters";
import Header from "../../components/Devices/Header";
import EditDialog from "../../components/Devices/EditDialog";

import Device from "../../model/device";

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
import CreateDialog from "../../components/Devices/CreateDialog";

const Devices = ({ data, editingDevice, filters, dispatch }) => {
  const [createDialogIsOpen, setCreateDialogIsOpen] = useState();

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
      <Header onAddClick={() => setCreateDialogIsOpen(true)} />
      <Box marginY={3}>
        <Filters values={filters} onValueChange={onFilterValueChange} />
      </Box>
      <Table
        data={data}
        onEditClick={(id) => dispatch(startEdit(id))}
        onDeleteClick={(id) => dispatch(deleteDevice(id))}
      />
      <EditDialog
        device={editingDevice}
        open={Boolean(editingDevice)}
        onClose={() => dispatch(endEdit())}
        onEdit={(data) => dispatch(editDevice(data))}
      />
      <CreateDialog
        open={createDialogIsOpen}
        onClose={() => setCreateDialogIsOpen(false)}
        onCreate={(data) =>
          dispatch(createDevice(data)).then(() => setCreateDialogIsOpen(false))
        }
      />
    </>
  );
};

Devices.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Device)),
  editingDevice: PropTypes.instanceOf(Device),
  filters: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

Devices.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({
  data: state.devices.devices,
  editingDevice: state.devices.editingDevice,
  filters: state.devices.filters,
});

export default connect(mapStateToProps)(Devices);
