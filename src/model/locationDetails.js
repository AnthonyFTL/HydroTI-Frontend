export default class LocationDetails {
  constructor(
    id,
    name,
    location,
    district,
    lastTime,
    latitude,
    longitude,
    connectedDevices
  ) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.district = district;
    this.lastTime = lastTime;
    this.latitude = latitude;
    this.longitude = longitude;
    this.connectedDevices = connectedDevices;
  }
}
