
import { motion } from 'framer-motion';
import styles from './styles/AnimationDualBox.module.css';
import m from '@/assets/images/m.png';

function AnimationDualBox({ animation1, animation2, children }) {
  return (
    <div className={styles.animationContainer}>
      {/* Primer cuadro animado */}
      <div className={styles.container}>
        <motion.div
          initial={animation1.initial}
          animate={animation1.animate}
          transition={animation1.transition}
          className={styles.motionBox}
        >
          <img src={m} alt="Framer Motion Logo" className={styles.logo} />
        </motion.div>
        {/* Segundo cuadro animado */}
        <motion.div
          initial={animation2.initial}
          animate={animation2.animate}
          transition={animation2.transition}
          className={styles.motionBox}
        >
          <img src={m} alt="Framer Motion Logo" className={styles.logo} />
        </motion.div>
      </div>

      {/* Descripción y código */}
      <div className={styles.description}>
        {children}
      </div>
    </div>
  );
}

export default AnimationDualBox;
