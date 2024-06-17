import './App.css';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression, Icon } from 'leaflet';
import flag from './assets/images/flag.png';

interface MapMarker {
  position: LatLngExpression;
  text: string;
}

export const Map = () => {
  const zoom: number = 2;
  const center: LatLngExpression = [1, 1];
  const minZoom: number = 1;
  const maxZoom: number = 2;

  const [showMarkers, setShowMarkers] = useState(true);

  const icon = new Icon({
    iconUrl: flag,
    iconSize: [43, 43],
  });

  const markers: MapMarker[] = [
    { position: [2, 6], text: 'Maják' },
    { position: [15, -35], text: 'Město' },
    { position: [-40, 25], text: 'Santa Maria' },
    { position: [81, 30], text: 'Severní přístav' },
    { position: [-40, 110], text: 'Město 2' },
    { position: [-45, -85], text: 'Jezero' },
  ];

  return (
    <div>
      <MapContainer className="Map" center={center} zoom={zoom} scrollWheelZoom={true} minZoom={minZoom} maxZoom={maxZoom}>
        <TileLayer url="../map/{z}/{x}/{y}.jpg" />
        {showMarkers
          ? markers.map((marker, idx) => {
              console.log(marker.text, marker.position);
              return (
                <Marker key={idx} position={marker.position as LatLngExpression} icon={icon}>
                  <Popup>{marker.text}</Popup>
                </Marker>
              );
            })
          : null}
      </MapContainer>
    </div>
  );
};
