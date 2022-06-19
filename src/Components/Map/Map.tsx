import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useRef } from "react";

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDsp8HGkj_cvdYpARwETEjlfr63NVGWysU",
  });
  const mapRef = useRef(null);
  const onLoad = (map: any): void => {
    mapRef.current = map;
  };

  const onUnMount = (): void => {
    mapRef.current = null;
  };
  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  // Center on Kalmar
  const center = {
    lat: 56.68,
    lng: 16.33,
  };

  // Disable default UI
  const options = {
    // styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  if (!isLoaded) return <div>Map Loading ...</div>;
  return (
    <GoogleMap
      // zoom={8}
      // defaultCenter={{ lat: -34.397, lng: 150.644 }}
      mapContainerStyle={containerStyle}
      options={options as google.maps.MapOptions}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnMount}
    />
    //   {/* <Marker position={{ lat: -34.397, lng: 150.644 }} /> */}
    // </GoogleMap>
  );
}

export default Map;
// export default withScriptjs(withGoogleMap(Map));
