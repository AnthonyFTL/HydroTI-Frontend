import {
  LOCATIONS_CHANGE_FILTER_VALUE,
  LOCATIONS_FETCH_SUCCEEDED,
  LOCATIONS_RESET_STATE,
} from "../types/locations";

import LocationService from "../../services/locationService";

export const getLocations = () => async (dispatch, getState) => {
  try {
    const locations = await LocationService.getAllLocations();
    const filteredLocations = filter(locations, getState().locations.filters);

    dispatch({
      type: LOCATIONS_FETCH_SUCCEEDED,
      payload: { data: filteredLocations },
    });
  } catch (error) {
    console.log(error);
  }
};

export const createLocation = (data) => async (dispatch) => {
  try {
    const newDevice = await LocationService.addLocation(data);

    dispatch({
      type: "LOCATIONS_CREATE_SUCCEEDED",
      payload: {
        data: newDevice,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const changeFilterValue = (value) => ({
  type: LOCATIONS_CHANGE_FILTER_VALUE,
  payload: { data: value },
});

export const locationsResetState = () => ({
  type: LOCATIONS_RESET_STATE,
});

const filter = (locations, filters) => {
  const name = filters.name.toLowerCase();
  const district = filters.district.toLowerCase();
  const state = filters.state;
  const devices = filters.connectedDevices;

  return locations
    .filter((location) => !name || location.name.toLowerCase().includes(name))
    .filter(
      (location) =>
        !district || location.district.toLowerCase().includes(district)
    )
    .filter((location) => !state || location.state === state)
    .filter((location) => !devices || location.connectedDevices === +devices);
};
