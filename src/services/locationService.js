import httpClient from "../util/httpClient";

import Location from "../model/location";
import LocationDetails from "../model/locationDetails";

import locationState from "../model/locationState";

class LocationService {
  async getAllLocations() {
    try {
      const response = await httpClient.get("parks");
      return response.data.map((location) =>
        this.convertLocationToModel(location)
      );
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getLocationDetails() {
    try {
      const response = await httpClient.get("parks");
      console.log(response.data);
      return this.convertLocationDetailsToModel(response.data[0]);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async addLocation(data) {
    try {
      const response = await httpClient.post("parks", data);
      return this.convertLocationToModel(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async editLocation(data) {
    try {
      const response = await httpClient.put(`parks/${data.id}`, {
        name: data.name,
        address: data.address,
        country: data.country,
        district: data.district,
        latitude: data.latitude,
        longitude: data.longitude,
        province: data.province,
        state: data.state,
      });
      return this.convertLocationDetailsToModel(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async deleteLocation(deviceId) {
    try {
      await httpClient.delete(`parks/${deviceId}`);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  convertLocationToModel(location) {
    return new Location(
      location.id,
      location.name,
      location.district,
      this.mapStateToModel(location.state),
      location.devicesConnected
    );
  }

  convertLocationDetailsToModel(location) {
    return new LocationDetails(
      location.id,
      location.name,
      location.address,
      location.country,
      location.district,
      location.latitude,
      location.longitude,
      location.province,
      location.state,
      [],
      location.lastTime
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
