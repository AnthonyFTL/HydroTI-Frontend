import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import PropTypes from "prop-types";
import { usePlacesWidget } from "react-google-autocomplete";
const GoogleMapsAPI = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const PlacesAutocomplete = ({ onPlaceSelected, id, label, fullWidth }) => {
  const { ref } = usePlacesWidget({
    apiKey: GoogleMapsAPI,
    onPlaceSelected,
  });

  return (
    <Autocomplete
      id={id}
      fullWidth={fullWidth}
      ref={ref}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
};

PlacesAutocomplete.propTypes = {
  onPlaceSelected: PropTypes.func,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};

PlacesAutocomplete.defaultProps = {
  onPlaceSelected: () => {},
  fullWidth: false.valueOf,
};

export default PlacesAutocomplete;
