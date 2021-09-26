import httpClient from "../util/httpClient";

class DataService {
  async switchPumpValue() {
    try {
      await httpClient.post("/iot/pump");
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async changeIrrigationType() {
    try {
      await httpClient.post("/iot/irrigation-type");
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default new DataService();
