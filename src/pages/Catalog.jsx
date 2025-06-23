// src/pages/Catalog.jsx
import { useParams } from 'react-router-dom';
import AnimationCard from '../components/AnimationCard/AnimationCard';
import styles from './Catalog.module.css'; // ✅ nuevo archivo CSS Modules
import { animations } from '../animations/basicos/meta'; // por ahora, solo basicos


function Catalog() {
  const { tema } = useParams();

  return (
    <div>
      <div className={styles.title}>
        <h2>Movimientos basicos en Framer Motion</h2>
      </div>

      {/* ✅ Agregamos un contenedor con clase de grilla */}
      <div className={styles.gridContainer}>
        {tema === 'basicos' && animations.map(anim => (
        <AnimationCard
          key={anim.id}
          id={anim.id}
          titulo={anim.titulo}
          descripcion={anim.descripcion}
          tema={tema}
          animation={anim.animation} // ✅ Esto faltaba
        />

        ))}
      </div>
    </div>
  );
}

export default Catalog;


// // import { animations as basicos } from '../animations/basicos/meta';
// import { animations as gestures } from '../animations/gestures/meta';

// const temas = {
//   basicos,
//   gestures,
// };

// const animations = temas[tema] || [];
// //
