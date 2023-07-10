import { useState } from 'react';
import { LOCATIONS } from '../../consts';
import { Location } from '../../types/locations';
import MapAddress from '../map-address/map-address';
import MapWrapper from '../map-wrapper/map-wrapper';

function Map() {
  const [activeLocation, setActiveLocation] = useState<Location>(LOCATIONS[0]);

  return (
    <section className="map">
      <div className="container">
        <h2 className="map__title">адреса</h2>
        <MapWrapper activeLocation={activeLocation} />
        <ul className="map__addresses">
          {LOCATIONS.map((location) => (
            <MapAddress
              key={location.id}
              location={location}
              activeLocation={activeLocation}
              setActiveLocation={setActiveLocation}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Map;
