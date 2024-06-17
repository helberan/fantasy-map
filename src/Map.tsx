import './App.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression, LatLngBoundsExpression } from 'leaflet';

export const Map = () => {
  const zoom: number = 1;
  const center: LatLngExpression = [0, 0];
  const minZoom: number = 0;
  const maxZoom: number = 2;
  const bounds: LatLngBoundsExpression = [
    [0, 0],     // Southwest corner of the image tile area
    [2, 2],   // Northeast corner of the image tile area
  ];

  return (
    <div>
        <MapContainer className='Map' center={center} zoom={zoom} bounds={bounds} scrollWheelZoom={true} minZoom={minZoom} maxZoom={maxZoom}>
            <TileLayer url="../map/{z}/{x}/{y}.jpg" tileSize={300}/>
        </MapContainer>
    </div>
  );
};