import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../../components/AnimationCard/AnimationCard.module.css';
import m from '../../assets/images/m.png';
import RandomMotion from '../../animations/basicos/RandomMotion';

function AnimationCard({ id, titulo, descripcion, tema, animation, animation1, animation2, random }) {
  return (
    <div className={styles.card}>
      

      {random ? (
        <RandomMotion />
      ) : animation1 && animation2 ? (
        <div className={styles.dualImageContainer}>
          <motion.img
            src={m}
            alt="Animación 1"
            className={styles.image}
            {...animation1} 
          />
          <motion.img
            src={m}
            alt="Animación 2"
            className={styles.image}
            {...animation2} 
          />
        </div>
      ) : (
        // Si la animación es individual
        <div className={styles.example}>
          <motion.img
            src={m}
            alt="Animación Framer Motion"
            className={styles.image}
            {...animation}
          />
        </div>
      )}

      <div className= {styles.content}>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <Link to={`/catalog/${tema}/${id}`}>Ver más</Link>
      </div>
    </div>
  );
}

export default AnimationCard;

