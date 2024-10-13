import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ lat, lng, address }) => {
  const mapStyles = {        
    height: "400px",
    width: "100%"};
  
  const defaultCenter = {
    lat: lat, lng: lng
  };

  return (
    <LoadScript googleMapsApiKey='YOUR_GOOGLE_MAPS_API_KEY'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
      <p>{address}</p>
    </LoadScript>
  );
};

export default MapComponent;
