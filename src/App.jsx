import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarehouseList from './components/WarehouseList';
import WarehouseDetail from './components/WarehouseDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WarehouseList />} />
        <Route path="/warehouse/:id" element={<WarehouseDetail />} />
      </Routes>
    </Router>
  );
};

export default App;