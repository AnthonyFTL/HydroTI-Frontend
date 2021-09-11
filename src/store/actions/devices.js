import {
  DEVICES_RESET_STATE,
  DEVICES_FETCH_SUCCEEDED,
  DEVICES_CHANGE_FILTER_VALUE,
  DEVICES_START_EDIT,
  DEVICES_END_EDIT,
} from "../types/devices";

import DeviceService from "../../services/deviceService";
import Device from "../../model/device";

export const getDevices = () => async (dispatch, getState) => {
  try {
    const devices = await DeviceService.getAllDevices();
    const filteredDevices = filter(devices, getState().devices.filters);

    dispatch({
      type: DEVICES_FETCH_SUCCEEDED,
      payload: { data: filteredDevices },
    });
  } catch (error) {
    console.log(error);
  }
};

export const createDevice = (data) => async (dispatch) => {
  const newDevice = new Device(
    Math.random(),
    data.name,
    data.location,
    "ACTIVE",
    null
  );

  dispatch({
    type: "DEVICES_CREATE_SUCCEEDED",
    payload: {
      data: newDevice,
    },
  });
};

export const editDevice = (data) => (dispatch) => {
  const newDevice = new Device(
    data.id,
    data.name,
    data.location,
    data.state,
    "today"
  );
  dispatch({
    type: "DEVICES_EDIT_SUCCEEDED",
    payload: {
      id: data.id,
      data: newDevice,
    },
  });

  dispatch(endEdit());
};

export const deleteDevice = (id) => async (dispatch) => {
  try {
    await DeviceService.deleteDevice(id);
    dispatch({
      type: "DEVICES_DELETE_SUCCEEDED",
      payload: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const startEdit = (id) => ({
  type: DEVICES_START_EDIT,
  payload: {
    id,
  },
});

export const endEdit = () => ({ type: DEVICES_END_EDIT });

export const changeFilterValue = (value) => ({
  type: DEVICES_CHANGE_FILTER_VALUE,
  payload: { data: value },
});

export const devicesResetState = () => ({
  type: DEVICES_RESET_STATE,
});

const filter = (devices, filters) => {
  const name = filters.name;
  const location = filters.location;
  const state = filters.state;

  return devices
    .filter((device) => !name || device.name.includes(name))
    .filter((device) => !location || device.location.includes(location))
    .filter((device) => !state || device.state === state);
};
