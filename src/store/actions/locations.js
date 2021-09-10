import {
  LOCATIONS_CHANGE_FILTER_VALUE,
  LOCATIONS_CHANGE_STATE,
  LOCATIONS_FETCH_SUCCEEDED,
  LOCATIONS_RESET_STATE,
} from "../types/locations";

import Location from "../../model/Location";
import locationState from "../../model/state";

const locations = [
  new Location(
    1,
    "location 1",
    "loc. district 1",
    locationState.SUSPENDED,
    "loc. connected devices 1"
  ),
  new Location(
    2,
    "location 2",
    "loc. district 2",
    locationState.DISCONNECTED,
    "loc. connected devices 2"
  ),
  new Location(
    3,
    "location 3",
    "loc. district 3",
    locationState.ACTIVE,
    "loc. connected devices 3"
  ),
];

export const getLocations = () => (dispatch, getState) => {
  const filters = getState().locations.filters;
  console.log(filters);
  dispatch({
    type: LOCATIONS_FETCH_SUCCEEDED,
    payload: { data: locations },
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
