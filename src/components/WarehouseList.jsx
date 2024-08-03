import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterWarehouses } from '../redux/warehouseSlice';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const WarehouseList = () => {
  const dispatch = useDispatch();
  const warehouses = useSelector(state => state.warehouses.filteredData);

  const handleFilter = (filters) => {
    dispatch(filterWarehouses(filters));
  };

  useEffect(() => {
    // Optionally, you can dispatch a filter to reset the list on mount
    handleFilter({ name: '', city: '', cluster: '', spaceAvailable: '' });
  }, [dispatch]);

  return (
    <div>
      <h1>Warehouse List</h1>
      <Filter onFilter={handleFilter} />
      <ul>
        {warehouses.map(warehouse => (
          <li key={warehouse.id}>
            <Link to={`/warehouse/${warehouse.id}`}>{warehouse.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WarehouseList;