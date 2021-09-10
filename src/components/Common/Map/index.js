import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

const GoogleMapsAPI = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Map = () => {
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
        defaultCenter={{ lat: -12.087079, lng: -77.080388 }}
        defaultZoom={18}
      >
        <Marker
          // eslint-disable-next-line react/prop-types
          google={props.google}
          position={{
            lat: -12.087079,
            lng: -77.080388,
          }}
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

export default Map;
