export default class LocationDetails {
  constructor(
    id,
    name,
    address,
    country,
    district,
    latitude,
    longitude,
    province,
    state,
    connectedDevices,
    lastTime
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.country = country;
    this.district = district;
    this.latitude = latitude;
    this.longitude = longitude;
    this.province = province;
    this.state = state;
    this.connectedDevices = connectedDevices;
    this.lastTime = lastTime;
  }
}
