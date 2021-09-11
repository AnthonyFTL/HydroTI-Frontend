import {
  DEVICES_RESET_STATE,
  DEVICES_FETCH_SUCCEEDED,
  DEVICES_CHANGE_FILTER_VALUE,
} from "../types/devices";

import DeviceService from "../../services/DeviceService";

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
