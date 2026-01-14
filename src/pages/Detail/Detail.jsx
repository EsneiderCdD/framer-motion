import { useParams } from 'react-router-dom';
import styles from './styles/Detail.module.css';
import { themes } from '../../data/themes';

function Detail() {
  const { tema, id } = useParams();
  const data = themes[tema];

  if (!data) {
    return <p>Tema no encontrado: "{tema}"</p>;
  }

  const animacion = data.find((item) => item.id === id);

  if (!animacion) {
    return <p>Animación no encontrada para el tema "{tema}" y el ID "{id}"</p>;
  }

  const { componente: Componente } = animacion;

  return (
    <div className={styles.container}>
      <Componente />
    </div>
  );

}

export default Detail;
