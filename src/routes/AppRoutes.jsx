// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import Detail from '../pages/Detail/Detail';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog/:tema" element={<Catalog />} />
      <Route path="/catalog/:tema/:id" element={<Detail />} />
    </Routes>
  );
}

export default AppRoutes;
