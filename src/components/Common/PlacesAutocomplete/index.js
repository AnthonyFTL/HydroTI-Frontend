import PropTypes from "prop-types";

import "./placesAutocomplete.css";

import { usePlacesWidget } from "react-google-autocomplete";

import OutlinedInput from "../OutlinedInput";

const GoogleMapsAPI = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const getComponentLongName = (place, type) => {
  const components = place["address_components"];
  const routeComponent = components.find((c) => c.types.includes(type));
  return routeComponent ? routeComponent["long_name"] : "";
};

const getDataFromPlace = (place) => {
  const location = place["geometry"]["location"];

  const route = getComponentLongName(place, "route");
  const streetNumber = getComponentLongName(place, "street_number");
  const district = getComponentLongName(place, "locality");
  const province = getComponentLongName(place, "administrative_area_level_2");
  const country = getComponentLongName(place, "country");

  return {
    address: [route, streetNumber].join(" ").trim(),
    district,
    province,
    country,
    latitude: location.lat(),
    longitude: location.lng(),
  };
};

const PlacesAutocomplete = ({ onPlaceSelected, options, ...rest }) => {
  const { ref } = usePlacesWidget({
    apiKey: GoogleMapsAPI,
    options,
    onPlaceSelected: (place) =>
      onPlaceSelected(place["formatted_address"], getDataFromPlace(place)),
  });

  return <OutlinedInput inputRef={ref} {...rest} />;
};

PlacesAutocomplete.propTypes = {
  onPlaceSelected: PropTypes.func,
  options: PropTypes.object,
};

PlacesAutocomplete.defaultProps = {
  onPlaceSelected: () => {},
  options: {},
};

export default PlacesAutocomplete;
