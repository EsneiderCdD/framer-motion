// src/pages/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>IGACA Framer Motion Lab</h1>
      <p>Selecciona un tema para explorar:</p>
      <ul>
        <li><Link to="/catalog/basicos">Básicos</Link></li>
        <li><Link to="/catalog/gestures">Gestures</Link></li>
        <li><Link to="/catalog/layout">Layout</Link></li>
      </ul>
    </div>
  );
}

export default Home;
