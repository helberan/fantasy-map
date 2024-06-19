import { MapComponent } from './MapComponent';
import { Filter } from './Filter';

export const Map = () => {
  return (
    <div className="Map-wrapper">
      <header>
        <h1>Map</h1>
        <Filter />
      </header>
      <MapComponent />
    </div>
  );
};
