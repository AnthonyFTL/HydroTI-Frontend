import {
  LOCATION_DETAILS_FETCH_SUCCEEDED,
  LOCATION_DETAILS_RESET_STATE,
} from "../types/locationDetails";

import LocationDetails from "../../model/locationDetails";

export const getLocationDetails = (id) => ({
  type: LOCATION_DETAILS_FETCH_SUCCEEDED,
  payload: {
    data: new LocationDetails(
      id,
      "Parque Santo Domingo primera etapa",
      `Urb. Residencial Lucyana`,
      "Carabayllo",
      "21/06/2021 - 15:23:45",
      [{ id: "ardn-02", name: "regador principal prmt" }]
    ),
  },
});

export const locationsDetailsResetState = () => ({
  type: LOCATION_DETAILS_RESET_STATE,
});
