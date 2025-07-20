import { useParams } from 'react-router-dom';
import { catalogContent as basicos } from '../animations/basicos/meta';
import { catalogContent as gestures } from '../animations/gestures/meta'; // 👈 Nuevo

const temas = {
  basicos,
  gestures,
};

function Detail() {
  const { tema, id } = useParams();
  const data = temas[tema]; // 👈 Selección dinámica por tema

  if (!data) {
    return <p>⚠️ Tema no encontrado: "{tema}"</p>;
  }

  const animacion = data.find((item) => item.id === id);

  if (!animacion) {
    return <p>⚠️ Animación no encontrada para el tema "{tema}" y el ID "{id}"</p>;
  }

  const { componente: Componente } = animacion;

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Componente />
    </div>
  );

}

export default Detail;
