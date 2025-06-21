// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

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
