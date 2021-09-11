import PropTypes from "prop-types";

import "./placesAutocomplete.css";

import { usePlacesWidget } from "react-google-autocomplete";

import OutlinedInput from "../OutlinedInput";

const GoogleMapsAPI = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const PlacesAutocomplete = ({ onPlaceSelected, options, ...rest }) => {
  const { ref } = usePlacesWidget({
    apiKey: GoogleMapsAPI,
    onPlaceSelected,
    options,
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
