import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterWarehouses } from '../redux/warehouseSlice';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import "./../App.css"

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
    <div className='warehouse'>
      <h1>Warehouse List</h1>
      <Filter onFilter={handleFilter} />
      <ul>
        {warehouses.map(warehouse => (
          <li key={warehouse.id}>
            <Link to={`/warehouse/${warehouse.id}`}>
            <div className='warehouse-card'>
                <div>
                    <img src={warehouse.src} alt="" />
                </div>
                <div>
                    <p className='warehouse-name'>{warehouse.name}</p>
                   <div className='warehouse-details'>
                            <div>
                                <p>City : {warehouse.city}</p>
                                <p>Space : {warehouse.space_available}</p>
                                <p>Type : {warehouse.type}</p>
                            </div>
                            <div>
                                <p>Cluster : {warehouse.cluster}</p>
                                <p>Registered : {warehouse.is_registered?"YES":"NO"}</p>
                                <p>Live : {warehouse.is_live?"YES":"NO"}</p>
                            </div>
                   </div>

                </div>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WarehouseList;