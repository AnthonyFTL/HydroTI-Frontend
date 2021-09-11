import {
  DEVICES_RESET_STATE,
  DEVICES_FETCH_SUCCEEDED,
  DEVICES_CHANGE_FILTER_VALUE,
} from "../types/devices";

import Device from "../../model/device";
import deviceState from "../../model/deviceState";

const devices = [
  new Device(1, "Disp. de riego", "location 1 ", deviceState.ACTIVE, "ayer"),
  new Device(2, "Sensor de humedad", "location 2 ", deviceState.ACTIVE, "hoy"),
  new Device(
    3,
    "Dispositivo",
    "location 3 ",
    deviceState.DISCONNECTED,
    "siempre"
  ),
];

export const getDevices = () => (dispatch, getState) => {
  const filters = getState().devices.filters;
  const filteredDevices = filter(devices, filters);

  dispatch({
    type: DEVICES_FETCH_SUCCEEDED,
    payload: { data: filteredDevices },
  });
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
