// src/animations/basicos/FadeIn.jsx
import { motion } from 'framer-motion';

function FadeIn() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        width: '150px',
        height: '150px',
        backgroundColor: '#61dafb',
        margin: 'auto',
        borderRadius: '10px'
      }}
    >
      Fade In
    </motion.div>
  );
}

export default FadeIn;
