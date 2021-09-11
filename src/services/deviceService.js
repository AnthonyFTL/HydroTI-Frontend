import httpClient from "../util/httpClient";

import Device from "../model/device";
import deviceState from "../model/deviceState";

class DeviceService {
  async getAllDevices() {
    try {
      const response = await httpClient.get("devices");
      return response.data.map(
        (device) =>
          new Device(
            device.id,
            device.name,
            device.location,
            this.mapStateToModel(device.state),
            device.lastUseDate
          )
      );
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async deleteDevice(deviceId) {
    try {
      await httpClient.delete(`devices/${deviceId}`);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  mapStateToModel = (state) => {
    switch (state) {
      case "INACTIVO": {
        return deviceState.DISCONNECTED;
      }
      case "ACTIVO": {
        return deviceState.ACTIVE;
      }
      case "SUSPENDIDO": {
        return deviceState.SUSPENDED;
      }
    }
  };

  mapModelToState = (model) => {
    switch (model) {
      case deviceState.DISCONNECTED: {
        return "INACTIVO";
      }
      case deviceState.ACTIVE: {
        return "ACTIVO";
      }
      case deviceState.SUSPENDED: {
        return "SUSPENDIDO";
      }
    }
  };
}

export default new DeviceService();
