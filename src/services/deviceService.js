import httpClient from "../util/httpClient";
import Device from "../model/device";
import deviceState from "../model/deviceState";

import moment from "moment";

class DeviceService {
  async getAllDevices() {
    try {
      const response = await httpClient.get("devices");
      return response.data.map((device) => this.convertToModel(device));
    } catch (error) {
      console.log("ex");
      return Promise.reject(error);
    }
  }
  async addDevice(name, parkId) {
    try {
      const response = await httpClient.post("devices", { name, parkId });
      return this.convertToModel(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async editDevice(data) {
    try {
      const response = await httpClient.put(`devices/${data.id}`, {
        name: data.name,
        parkId: data.location,
        state: this.mapModelToState(data.state),
      });
      return this.convertToModel(response.data);
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

  convertToModel(device) {
    // console.log(device);
    return new Device(
      device.id,
      device.name,
      device.location,
      this.mapStateToModel(device.state),
      moment(moment.utc(device.lastDateUsed).toDate())
        .local()
        .format("DD-MM-YYYY HH:mm:ss"),
      device.parkId
    );
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
