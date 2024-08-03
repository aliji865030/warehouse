import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateWarehouse } from '../redux/warehouseSlice';

const WarehouseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const warehouse = useSelector(state => state.warehouses.data.find(w => w.id === parseInt(id)));

  const [formData, setFormData] = useState({ ...warehouse });

  useEffect(() => {
    if (warehouse) {
      setFormData(warehouse);
    }
  }, [warehouse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateWarehouse({ id: warehouse.id, updatedData: formData }));
    navigate('/');
  };

  if (!warehouse) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Warehouse</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} />
        <input name="city" value={formData.city} onChange={handleChange} />
        <input name="cluster" value={formData.cluster} onChange={handleChange} />
        <input name="space_available" type="number" value={formData.space_available} onChange={handleChange} />
        <select name="is_live" value={formData.is_live} onChange={handleChange}>
          <option value={true}>Live</option>
          <option value={false}>Not Live</option>
        </select>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default WarehouseDetail;