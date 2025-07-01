// src/pages/Detail.jsx
import { useParams } from 'react-router-dom';
import { catalogContent as basicos } from '../animations/basicos/meta';

function Detail() {
  const { tema, id } = useParams();

  // Por ahora solo manejamos 'basicos'
  const data = tema === 'basicos' ? basicos : [];

  // Buscamos la animación específica
  const animacion = data.find(anim => anim.id === id);

  if (!animacion) {
    return <p>⚠️ Animación no encontrada para el tema "{tema}" y el ID "{id}"</p>;
  }

  const { componente: ComponenteAnimado } = animacion;

  return (
    <div style={{ textAlign: 'center' }}>
      
      <div style={{ marginTop: '2rem' }}>
        <ComponenteAnimado />
        
      </div>
    </div>
  );
}

export default Detail;
