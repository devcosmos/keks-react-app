import { useEffect, useRef, useState, MutableRefObject } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DEFAULT_MAP_COORDINATES, DEFAULT_MAP_ZOOM } from '../consts';

function useMap(mapRef: MutableRefObject<HTMLElement | null>) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: DEFAULT_MAP_COORDINATES.latitude,
          lng: DEFAULT_MAP_COORDINATES.longitude,
        },
        zoom: DEFAULT_MAP_ZOOM,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef]);

  return map;
}

export default useMap;
