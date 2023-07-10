import { Location } from '../../types/locations';

type PropsType = {
  location: Location;
  activeLocation: Location;
  setActiveLocation: (activeLocation: Location) => void;
}

function MapAddress({location, activeLocation, setActiveLocation}: PropsType) {
  const {id, name, address} = location;
  return (
    <li className="map__address">
      <div className="custom-toggle custom-toggle--radio custom-toggle--address">
        <input
          type="radio"
          value={id}
          id={id}
          name="user-agreement"
          checked={activeLocation.id === id}
          onChange={() => setActiveLocation(location)}
        />
        <label className="custom-toggle__label" htmlFor={id}>
          {name}
        </label>
        <address className="custom-toggle__address">
          {address}
          <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
            <use xlinkHref="#icon-keks-footprint" />
          </svg>
        </address>
      </div>
    </li>
  );
}

export default MapAddress;
