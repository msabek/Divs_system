'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, LayersControl, LayerGroup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Incident {
  id: number;
  lat: number;
  lng: number;
  category: string;
  description: string;
  imageUrl?: string;
}

interface IncidentMapProps {
  incidents: Incident[];
  onAddIncident: (lat: number, lng: number) => void;
}

const IncidentMap: React.FC<IncidentMapProps> = ({ incidents, onAddIncident }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        onAddIncident(e.latlng.lat, e.latlng.lng);
      },
    });
    return null;
  };

  const AutoCenter = () => {
    const map = useMap();
    useEffect(() => {
      if (incidents.length > 0) {
        const lastIncident = incidents[incidents.length - 1];
        map.panTo([lastIncident.lat, lastIncident.lng]);
      }
    }, [incidents, map]);
    return null;
  };

  const getMarkerIcon = (category: string) => {
    return L.icon({
      iconUrl: `/icons/${category}.png`,
      iconSize: [25, 25],
    });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <MapContainer center={[52.1332, -106.6700]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <LayersControl position="topright">
        {/* Base layers and overlays remain the same */}
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>
        {/* ... other base layers ... */}

        <LayersControl.Overlay checked name="Labels">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            opacity={0.7}
            zIndex={650}
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Incidents">
          <LayerGroup>
            {incidents.map((incident) => (
              <Marker
                key={incident.id}
                position={[incident.lat, incident.lng]}
                icon={getMarkerIcon(incident.category)}
              >
                <Popup>
                  <div>
                    <h3>{incident.category}</h3>
                    <p>{incident.description}</p>
                    <p>Location: {incident.lat.toFixed(4)}, {incident.lng.toFixed(4)}</p>
                    {incident.imageUrl && (
                      <img src={incident.imageUrl} alt="Incident" style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain' }} />
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
      <MapEvents />
      <AutoCenter />
    </MapContainer>
  );
};

export default IncidentMap;
