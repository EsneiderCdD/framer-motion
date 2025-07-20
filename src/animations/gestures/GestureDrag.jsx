// GestureDrag.jsx
import { motion } from "framer-motion";
import styles from './styles.module.css'; 


const GestureDrag = () => {
  return (
    <div className={styles.wrapper}>
      <motion.div className={styles.box} drag>
        Drag Me
      </motion.div>
    </div>
  );
};

export default GestureDrag;
