import { motion } from 'framer-motion';
import styles from './LabMotionBuilder.module.css';
import m from '../../../../assets/images/m.png';


function MotionPreview({ motionProps, transitionProps }) {
  return (
    <div className={styles.preview}>
      <motion.div
        className={styles.motionBox}
        animate={{
          ...motionProps,
        }}
        transition={{
          ...transitionProps,
        }}
      >
        <img src={m} alt="Elemento animado" className={styles.logo} />
      </motion.div>
    </div>
  );
}

export default MotionPreview;
