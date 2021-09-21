import irrigationService from "../../services/irrigationService";
import {
  LOCATIONS_CHANGE_FILTER_VALUE,
  LOCATIONS_FETCH_SUCCEEDED,
  LOCATIONS_RESET_STATE,
} from "../types/locations";

export const getIrrigations = () => async (dispatch, getState) => {
  try {
    const irrigations = await irrigationService.getAllIrrigations();
    const filteredIrrigations = filter(
      irrigations,
      getState().irrigations.filters
    );

    dispatch({
      type: LOCATIONS_FETCH_SUCCEEDED,
      payload: { data: filteredIrrigations },
    });
  } catch (error) {
    console.log(error);
  }
};

export const createLocation = (data) => async (dispatch) => {
  try {
    const newDevice = await irrigationService.addIrrigation(data);

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

export const irrigationsResetState = () => ({
  type: LOCATIONS_RESET_STATE,
});

const filter = (irrigations, filters) => {
  const name = filters.name.toLowerCase();
  const district = filters.district.toLowerCase();
  const state = filters.state;
  const devices = filters.connectedDevices;

  return irrigations
    .filter((location) => !name || location.name.toLowerCase().includes(name))
    .filter(
      (location) =>
        !district || location.district.toLowerCase().includes(district)
    )
    .filter((location) => !state || location.state === state)
    .filter((location) => !devices || location.connectedDevices === +devices);
};
