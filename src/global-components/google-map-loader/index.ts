import GoogleMapsApiLoader from "google-maps-api-loader";

interface MapConfig {
  apiKey: string;
  config: (google: any) => void;
}

interface MapInstance {
  map: (google: any) => void;
  google: (google: any) => void;
}

const initializeMap = async (
  mapRef: HTMLElement,
  mapConfig: MapConfig
): Promise<MapInstance> => {
  const google = await GoogleMapsApiLoader({
    apiKey: mapConfig.apiKey,
  });
  const map = new google.maps.Map(mapRef, mapConfig.config(google));

  return {
    map: map,
    google: google,
  };
};

export { MapConfig, MapInstance, initializeMap };
