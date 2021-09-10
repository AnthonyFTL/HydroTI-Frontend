import {
  LOCATIONS_CHANGE_FILTER_VALUE,
  LOCATIONS_CHANGE_STATE,
  LOCATIONS_FETCH_SUCCEEDED,
  LOCATIONS_RESET_STATE,
} from "../types/locations";

import Location from "../../model/location";
import locationState from "../../model/state";

const locations = [
  new Location(1, "location 1", "district 1", locationState.SUSPENDED, 4),
  new Location(2, "location 2", "district 2", locationState.DISCONNECTED, 3),
  new Location(3, "location 3", "district 3", locationState.ACTIVE, 4),
];

export const getLocations = () => (dispatch, getState) => {
  const filters = getState().locations.filters;
  const filteredLocations = filter(locations, filters);

  dispatch({
    type: LOCATIONS_FETCH_SUCCEEDED,
    payload: { data: filteredLocations },
  });
};

export const changeState = (id, state) => ({
  type: LOCATIONS_CHANGE_STATE,
  payload: { id, state },
});

export const changeFilterValue = (value) => ({
  type: LOCATIONS_CHANGE_FILTER_VALUE,
  payload: { data: value },
});

export const locationsResetState = () => ({
  type: LOCATIONS_RESET_STATE,
});

const filter = (locations, filters) => {
  const name = filters.name;
  const district = filters.district;
  const state = filters.state;
  const devices = filters.connectedDevices;

  return locations
    .filter((location) => !name || location.name.includes(name))
    .filter((location) => !district || location.district.includes(district))
    .filter((location) => !state || location.state === state)
    .filter((location) => !devices || location.connectedDevices === +devices);
};
