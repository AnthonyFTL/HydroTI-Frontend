import {
  LOCATION_DETAILS_DELETE_SUCCEEDED,
  LOCATION_DETAILS_EDIT_SUCCEEDED,
  LOCATION_DETAILS_FETCH_SUCCEEDED,
  LOCATION_DETAILS_RESET_STATE,
} from "../types/locationDetails";

import LocationService from "../../services/locationService";

export const getLocationDetails = (id) => async (dispatch) => {
  try {
    const details = await LocationService.getLocationDetails(id);

    dispatch({
      type: LOCATION_DETAILS_FETCH_SUCCEEDED,
      payload: {
        data: details,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const editLocation = (data) => async (dispatch) => {
  try {
    const edited = await LocationService.editLocation(data);

    dispatch({
      type: LOCATION_DETAILS_EDIT_SUCCEEDED,
      payload: {
        data: edited,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteLocation = (id) => async (dispatch) => {
  try {
    await LocationService.deleteLocation(id);
    dispatch({ type: LOCATION_DETAILS_DELETE_SUCCEEDED });
  } catch (error) {
    console.log(error);
  }
};

export const locationsDetailsResetState = () => ({
  type: LOCATION_DETAILS_RESET_STATE,
});
