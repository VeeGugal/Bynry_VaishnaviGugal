import React from 'react';
import { useParams } from 'react-router-dom';
import { profiles } from '../data';
import MapComponent from './MapComponent';

const ProfileDetails = () => {
  const { id } = useParams();
  const profile = profiles.find(p => p.id === parseInt(id));

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <MapComponent lat={profile.lat} lng={profile.lng} address={profile.address} />
    </div>
  );
};

export default ProfileDetails;
