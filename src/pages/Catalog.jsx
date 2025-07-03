import { useParams } from 'react-router-dom';
import AnimationCard from '../components/AnimationCard/AnimationCard';
import styles from './Catalog.module.css';
import { catalogContent } from '../animations/basicos/meta';

function Catalog() {
  const { tema } = useParams();

  return (
    <div>
      <div className={styles.title}>
        <h2>Nivel Basico</h2>
        
      </div>

      <div className={styles.gridContainer}>
        {tema === 'basicos' && catalogContent.map((item, index) => {
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
  speed={item.speed}       // ✅ Agregar estas
  rangeX={item.rangeX}     // ✅
  rangeY={item.rangeY}     // ✅
 />

          );
        })}

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
