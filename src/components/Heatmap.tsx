import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { fetchTemperatures } from '../services/temperatureService';
import { Location } from '../types/Location';
import Legend from './Legend';
import Search from './Search';
import 'leaflet/dist/leaflet.css';
import '../styles/Heatmap.css';

const Heatmap: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const getTemperatures = async () => {
      const data = await fetchTemperatures();
      console.log(data);
      setLocations(data);
    };
    getTemperatures();
  }, []);

  const getColor = (temperature: number): string => {
    if (temperature <= 0) return '#0000FF'; // Blue for freezing
    if (temperature <= 10) return '#00FFFF'; // Cyan for cold
    if (temperature <= 20) return '#00FF00'; // Green for mild
    if (temperature <= 30) return '#FFFF00'; // Yellow for warm
    if (temperature <= 40) return '#FFA500'; // Orange for hot
    return '#FF0000'; // Red for extreme heat
  };

  const mapCenter: LatLngExpression = [20, 0];

  return (
    <div className="heatmap-container">
      <MapContainer
        center={mapCenter}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Circle
            key={`${location.lat}-${location.lon}`}
            center={[location.lat, location.lon] as LatLngExpression}
            radius={150000}
            fillColor={getColor(location.temperature)}
            color={getColor(location.temperature)}
            fillOpacity={0.7}
          >
            <Popup>
              <div>
                <strong>{location.name}</strong>
                <br />
                Temperature: {location.temperature}°C
              </div>
            </Popup>
          </Circle>
        ))}

        <Search />
        <Legend />
      </MapContainer>
    </div>
  );
};

export default Heatmap;
