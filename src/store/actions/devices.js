import {
  DEVICES_RESET_STATE,
  DEVICES_FETCH_SUCCEEDED,
  DEVICES_CHANGE_FILTER_VALUE,
  DEVICES_START_EDIT,
  DEVICES_END_EDIT,
  DEVICES_CREATE_SUCCEEDED,
  DEVICES_EDIT_SUCCEEDED,
  DEVICES_DELETE_SUCCEEDED,
} from "../types/devices";

import DeviceService from "../../services/deviceService";

export const getDevices = () => async (dispatch) => {
  try {
    const devices = await DeviceService.getAllDevices();

    dispatch({
      type: DEVICES_FETCH_SUCCEEDED,
      payload: { data: [devices[0]] },
    });
  } catch (error) {
    console.log(error);
  }
};

export const createDevice = (data) => async (dispatch) => {
  try {
    const newDevice = await DeviceService.addDevice(data.name, data.location);
    dispatch({
      type: DEVICES_CREATE_SUCCEEDED,
      payload: {
        data: newDevice,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const editDevice = (data) => async (dispatch) => {
  try {
    const edited = await DeviceService.editDevice(data);

    dispatch({
      type: DEVICES_EDIT_SUCCEEDED,
      payload: {
        id: data.id,
        data: edited,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteDevice = (id) => async (dispatch) => {
  try {
    await DeviceService.deleteDevice(id);
    dispatch({
      type: DEVICES_DELETE_SUCCEEDED,
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
