// src/pages/Catalog.jsx
import { useParams } from 'react-router-dom';
import AnimationCard from '../components/AnimationCard/AnimationCard';
import { animations } from '../animations/basicos/meta'; // por ahora, solo basicos

function Catalog() {
  const { tema } = useParams();

  return (
    <div>
      <h2>Catálogo: {tema}</h2>

      {tema === 'basicos' && animations.map(anim => (
        <AnimationCard
          key={anim.id}
          id={anim.id}
          titulo={anim.titulo}
          descripcion={anim.descripcion}
          tema={tema}
        />
      ))}
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