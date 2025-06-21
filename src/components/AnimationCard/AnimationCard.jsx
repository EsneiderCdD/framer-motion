// src/components/AnimationCard/index.jsx
import { Link } from 'react-router-dom';
import styles from '../../components/AnimationCard/AnimationCard.module.css';

function AnimationCard({ id, titulo, descripcion, tema }) {
  return (
    <div className={styles.card}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <Link to={`/catalog/${tema}/${id}`}>Ver más</Link>
    </div>
  );
}

export default AnimationCard;
