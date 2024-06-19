import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression, Icon, LatLngBoundsExpression } from 'leaflet';
import { Link, useParams } from 'react-router-dom';
import flag from '../../assets/images/flag.png';
import locationData from '../../locations.json';

interface Location {
  id: string;
  name: string;
  position: number[];
  description: string;
}

export const MapComponent = () => {
  const zoom: number = 1;
  const center: LatLngExpression = [1, 1];
  const minZoom: number = 1;
  const maxZoom: number = 2;
  const bounds: LatLngBoundsExpression = [
    [-100, 0],
    [81, 30],
  ];

  //showMarkers - information from store
  const [showMarkers, setShowMarkers] = useState(true);

  const icon = new Icon({
    iconUrl: flag,
    iconSize: [43, 43],
  });

  const locations = locationData.locations;

  return (
    <div>
      <MapContainer className="Map" center={center} zoom={zoom} scrollWheelZoom={true} minZoom={minZoom} maxZoom={maxZoom} bounds={bounds}>
        <TileLayer url="../map/{z}/{x}/{y}.jpg" noWrap={true} />
        {showMarkers
          ? locations.map((location: Location) => (
              <Marker key={location.name} position={location.position as LatLngExpression} icon={icon}>
                <Popup>
                  <h2>{location.name}</h2>
                  <p>{location.description}</p>
                  <Link to={`/location/${location.id}`}>Enter</Link>
                </Popup>
              </Marker>
            ))
          : null}
      </MapContainer>
    </div>
  );
};
