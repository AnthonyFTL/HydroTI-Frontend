import {
  IRRIGATION_ENTRIES_FETCH_SUCCEEDED,
  IRRIGATION_ENTRIES_RESET_STATE,
} from "../types/locationDetails";
import IrrigationService from "../../services/irrigationService";

export const changeFilterValue = (value) => ({
  type: "IRRIGATIONS_CHANGE_FILTER_VALUE",
  payload: { data: value },
});

export const irrigationsResetState = () => ({
  type: "IRRIGATIONS_RESET_STATE",
});

export const getReports = () => async (dispatch) => {
  try {
    const details = await IrrigationService.getIrrigationEntries();

    dispatch({
      type: IRRIGATION_ENTRIES_FETCH_SUCCEEDED,
      payload: {
        data: details,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const irrigationEntriesResetState = () => ({
  type: IRRIGATION_ENTRIES_RESET_STATE,
});
