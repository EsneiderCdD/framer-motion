import { motion } from 'framer-motion'; // ✅ Se importa aquí, porque aquí se usa
import { Link } from 'react-router-dom';
import styles from '../../components/AnimationCard/AnimationCard.module.css';
import m from '../../assets/images/m.png';

function AnimationCard({ id, titulo, descripcion, tema, animation }) {
  return (
    <div className={styles.card}>
      <motion.img
        src={m}
        alt="Animación Framer Motion"
        className={styles.image}
        {...animation} // Aplicamos aquí las props dinámicas
     
      />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <Link to={`/catalog/${tema}/${id}`}>Ver más</Link>
    </div>
  );
}

export default AnimationCard;
