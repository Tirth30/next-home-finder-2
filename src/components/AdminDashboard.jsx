import React, { useState } from 'react';
import PropertyForm from './PropertyForm';
import PropertyList from './PropertyList';

const AdminDashboard = () => {
  const [properties, setProperties] = useState([]);

  const addProperty = (property) => {
    // Add property to properties list
    setProperties([...properties, property]);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <PropertyForm onSubmit={addProperty} />
      <PropertyList properties={properties} />
    </div>
  );
};

export default AdminDashboard;
