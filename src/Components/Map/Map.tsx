import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
  });

  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const center = { lat: 51.5, lng: -0.12 };

  const options = {
    zoomControl: true,
  };

  if (!isLoaded) return <div>Map Loading ...</div>;
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={options as google.maps.MapOptions}
      center={center}
      zoom={12}
    >
      <Marker position={{ lat: 51.5, lng: -0.12 }} />
    </GoogleMap>
  );
}

export default Map;
