import { motion } from 'framer-motion';
import styles from './styles/Card.module.css';

function Card({ title, animation }) {
  return (
    <div className={styles.cardContainer}>
      <motion.div
        className={styles.card}
        variants={animation}
        whileHover="hover"
        whileTap="tap"
        initial="initial"
        animate="animate"
      >

      </motion.div>
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
