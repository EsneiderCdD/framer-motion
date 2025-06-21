// src/animations/basicos/SlideX.jsx
import { motion } from 'framer-motion';

function SlideX() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      style={{
        width: '150px',
        height: '150px',
        backgroundColor: '#ff6b6b',
        margin: 'auto',
        borderRadius: '10px'
      }}
    >
      Slide X
    </motion.div>
  );
}

export default SlideX;
