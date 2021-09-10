export default class LocationDetails {
  constructor(id, name, location, district, lastTime, connectedDevices) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.district = district;
    this.lastTime = lastTime;
    this.connectedDevices = connectedDevices;
  }
}
