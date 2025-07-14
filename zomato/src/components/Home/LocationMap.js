import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = ({ onClose }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation([position.coords.latitude, position.coords.longitude]);
      },
      error => {
        console.error('Location error:', error);
        setLocation([17.25, 82.6]); // fallback to Gollaprolu
      }
    );
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1100
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '12px',
          maxWidth: '700px',
          width: '90%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 0 15px rgba(0,0,0,0.3)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ marginBottom: '10px' }}>Delivery Location 📍</h3>
        {location && (
          <MapContainer center={location} zoom={13} style={{ height: '400px', width: '100%', borderRadius: '12px' }}>
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={location}>
              <Popup>You are here!</Popup>
            </Marker>
          </MapContainer>
        )}
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#e53935',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
          onClick={onClose}
        >
          Close Map
        </button>
      </div>
    </div>
  );
};

export default LocationMap;