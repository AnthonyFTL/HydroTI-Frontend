import {
  DEVICES_RESET_STATE,
  DEVICES_FETCH_SUCCEEDED,
  DEVICES_CHANGE_FILTER_VALUE,
  DEVICES_START_EDIT,
  DEVICES_END_EDIT,
} from "../types/devices";

const initialState = {
  devices: [],
  editingDevice: null,
  filters: {
    name: "",
    location: "",
    state: "",
  },
};

const devices = (state = initialState, action) => {
  switch (action.type) {
    case DEVICES_RESET_STATE: {
      return {
        ...initialState,
      };
    }
    case DEVICES_FETCH_SUCCEEDED: {
      return {
        ...state,
        devices: action.payload.data,
      };
    }
    case DEVICES_CHANGE_FILTER_VALUE: {
      return {
        ...state,
        filters: { ...state.filters, ...action.payload.data },
      };
    }
    case "DEVICES_CREATE_SUCCEEDED": {
      return {
        ...state,
        devices: [...state.devices, action.payload.data],
      };
    }
    case "DEVICES_EDIT_SUCCEEDED": {
      const { id, data } = action.payload;

      const deviceIndex = state.devices.findIndex((device) => device.id === id);
      const newDevices = [...state.devices];
      newDevices[deviceIndex] = data;

      return {
        ...state,
        devices: newDevices,
      };
    }
    case "DEVICES_DELETE_SUCCEEDED": {
      const { id } = action.payload;

      return {
        ...state,
        devices: state.devices.filter((device) => device.id !== id),
      };
    }
    case DEVICES_START_EDIT: {
      const { id } = action.payload;

      return {
        ...state,
        editingDevice: state.devices.find((device) => device.id === id),
      };
    }
    case DEVICES_END_EDIT: {
      return {
        ...state,
        editingDevice: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default devices;
