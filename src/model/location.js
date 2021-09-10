export default class Location {
  constructor(id, name, district, state, connectedDevices) {
    this.id = id;
    this.name = name;
    this.district = district;
    this.state = state;
    this.connectedDevices = connectedDevices;
  }
}
