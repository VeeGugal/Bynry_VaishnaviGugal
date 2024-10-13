import React, { useState } from 'react';
import { profiles } from '../data';

const AdminDashboard = () => {
  const [profileList, setProfileList] = useState(profiles);

  const handleDelete = (id) => {
    setProfileList(profileList.filter(profile => profile.id !== id));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {profileList.map(profile => (
          <li key={profile.id}>
            {profile.name}
            <button onClick={() => handleDelete(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
