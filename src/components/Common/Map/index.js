import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";
import PropTypes from "prop-types";

const GoogleMapsAPI = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Map = ({ latitude, longitude }) => {
  const MapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        // eslint-disable-next-line react/prop-types
        google={props.google}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
        onClick={(e) => console.log(e)}
        center={{ lat: latitude, lng: longitude }}
        defaultZoom={18}
      >
        <Marker
          // eslint-disable-next-line react/prop-types
          google={props.google}
          position={{ lat: latitude, lng: longitude }}
        />
      </GoogleMap>
    ))
  );

  return (
    <MapComponent
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${GoogleMapsAPI}&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: "100%" }} />}
      containerElement={<div style={{ height: "100%" }} />}
      mapElement={<div style={{ height: "100%" }} />}
    />
  );
};

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default Map;
