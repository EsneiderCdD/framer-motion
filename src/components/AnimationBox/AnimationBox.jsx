// src/components/AnimationBox/AnimationBox.jsx
import { motion } from 'framer-motion';
import styles from './AnimationBox.module.css'; 
import m from  '../../assets/images/m.png'; 

function AnimationBox({ initial, animate, transition, children }) {
  return (
    <div className={styles.animationContainer}>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className={styles.motionBox}
      >
        <img src={m} alt="Framer Motion Logo" className={styles.logo} />
      </motion.div>
      <div className={styles.description}>
        {children} {/* Aquí mostramos la explicación y el código */}
      </div>
    </div>
  );
}

export default AnimationBox;

