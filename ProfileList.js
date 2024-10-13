import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import { profiles } from '../data'; // Sample profiles from data.js
import './ProfileList.css';

const ProfileList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="profile-list">
      <input 
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="profile-cards">
        {filteredProfiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
