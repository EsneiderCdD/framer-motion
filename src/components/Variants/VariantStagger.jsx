// src/components/Variants/VariantStagger.jsx

import { motion } from 'framer-motion';
import styles from './styles.module.css';
import m from '../../assets/m.svg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function VariantStagger() {
  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <div>
          <h3>Stagger</h3>
          <p>
            `staggerChildren` permite animar múltiples elementos de forma escalonada, dando una secuencia animada natural. Ideal para listas o grids.
          </p>
        </div>

        <motion.div
          className={styles.circleWrapper}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[...Array(3)].map((_, i) => (
            <motion.img
              key={i}
              src={m}
              alt="logo"
              className={styles.circle}
              variants={childVariants}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
