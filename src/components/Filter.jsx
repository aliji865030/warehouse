import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [filters, setFilters] = useState({ name: '', city: '', cluster: '', spaceAvailable: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Search by name" onChange={handleChange} />
      <input name="city" placeholder="City" onChange={handleChange} />
      <input name="cluster" placeholder="Cluster" onChange={handleChange} />
      <input name="spaceAvailable" type="number" placeholder="Space Available" onChange={handleChange} />
      <button type="submit">Filter</button>
    </form>
  );
};

export default Filter;