import { useParams } from 'react-router-dom';
import AnimationCard from '../components/AnimationCard/AnimationCard';
import styles from './Catalog.module.css';

import { catalogContent as basicos } from '../animations/basicos/meta';
import { catalogContent as gestures } from '../animations/gestures/meta'; // 👈 Nuevo

const temas = {
  basicos,
  gestures,
};

function Catalog() {
  const { tema } = useParams();
  const catalog = temas[tema]; // 👈 Selección dinámica del contenido

  if (!catalog) {
    return <p>⚠️ Tema no encontrado: "{tema}"</p>; // 👈 Protección contra rutas inválidas
  }

  return (
    <div>
      <div className={styles.title}>
        <h2>Tema: {tema.charAt(0).toUpperCase() + tema.slice(1)}</h2>
      </div>

      <div className={styles.gridContainer}>
        {catalog.map((item, index) => {
          if (item.type === 'title') {
            return (
              <div key={index} className={styles.sectionTitle}>
                <h3>{item.text}</h3>
              </div>
            );
          }

          return (
            <AnimationCard
              key={item.id}
              id={item.id}
              titulo={item.titulo}
              descripcion={item.descripcion}
              tema={tema}
              animation={item.animation}
              animation1={item.animation1}
              animation2={item.animation2}
              random={item.random}
              speed={item.speed}
              rangeX={item.rangeX}
              rangeY={item.rangeY}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Catalog;
