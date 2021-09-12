import httpClient from "../util/httpClient";

import Location from "../model/location";
import locationState from "../model/locationState";

class LocationService {
  async getAllLocations() {
    try {
      const response = await httpClient.get("parks");
      return response.data.map((location) => this.convertToModel(location));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  convertToModel(location) {
    return new Location(
      location.id,
      location.name,
      location.district,
      this.mapStateToModel(location.state)
    );
  }

  mapStateToModel(state) {
    switch (state) {
      case "INACTIVO": {
        return locationState.WITHOUT_CONNECTION;
      }
      case "RIEGO_SUSPENDIDO": {
        return locationState.SUSPENDED_IRRIGATION;
      }
      case "RIEGO_EN_PROGRESO": {
        return locationState.IRRIGATION_IN_PROGRESS;
      }
    }
  }
}

export default new LocationService();
