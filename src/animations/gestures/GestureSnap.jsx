// GestureSnap.jsx
import { motion } from "framer-motion";
import styles from './styles.module.css'; 

const GestureSnap = () => {
  return (
    <div className={styles.wrapper}>
      <motion.div className={styles.box} drag dragSnapToOrigin>
        Snap Back
      </motion.div>
    </div>
  );
};

export default GestureSnap;
