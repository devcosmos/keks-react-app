import { useEffect, useRef } from 'react';
import { Marker } from 'leaflet';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map';
import { Location } from '../../types/locations';
import { DEFAULT_MAP_COORDINATES, DEFAULT_MAP_ZOOM, LOCATIONS } from '../../consts';

const makeIcon = (iconURL: string): leaflet.Icon => leaflet.icon({
  iconUrl: iconURL,
  iconSize: [30, 30],
  iconAnchor: [30, 30],
});

type MapScreenProps = {
  activeLocation: Location;
}

function MapWrapper({activeLocation}: MapScreenProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      LOCATIONS.forEach((location) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker.setIcon(makeIcon(location.icon));

        if (location.id === activeLocation.id) {
          marker.addTo(markers);
        }
      });

      markers.addTo(map);
      map.setView([
        DEFAULT_MAP_COORDINATES.latitude,
        DEFAULT_MAP_COORDINATES.longitude
      ], DEFAULT_MAP_ZOOM);
    }

    return (() => {
      markers.clearLayers();
    });
  }, [map, activeLocation]);

  return (
    <div className="map__wrapper" ref={mapRef} />
  );
}

export default MapWrapper;
