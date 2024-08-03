import { createSlice } from '@reduxjs/toolkit';
import warehouseData from '../warehouses.json';

const warehouseSlice = createSlice({
  name: 'warehouses',
  initialState: {
    data: warehouseData,
    filteredData: warehouseData,
  },
  reducers: {
    filterWarehouses: (state, action) => {
      const { name, city, cluster, spaceAvailable } = action.payload;
      state.filteredData = state.data.filter(warehouse => {
        return (
          (name ? warehouse.name.toLowerCase().includes(name.toLowerCase()) : true) &&
          (city ? warehouse.city.toLowerCase() === city.toLowerCase() : true) &&
          (cluster ? warehouse.cluster.toLowerCase() === cluster.toLowerCase() : true) &&
          (spaceAvailable ? warehouse.space_available >= spaceAvailable : true)
        );
      });
    },
    updateWarehouse: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.data.findIndex(warehouse => warehouse.id === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...updatedData };
      }
    },
  },
});

export const { filterWarehouses, updateWarehouse } = warehouseSlice.actions;
export default warehouseSlice.reducer;