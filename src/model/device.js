export default class Device {
  constructor(id, name, location, state, lastDateUsed, parkId) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.state = state;
    this.lastDateUsed = lastDateUsed;
    this.parkId = parkId;
  }
}
