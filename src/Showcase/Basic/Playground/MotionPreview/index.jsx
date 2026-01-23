import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import styles from './styles.module.css';
import m from '@/assets/images/m.png';

function MotionPreview({ motionProps, transitionProps, playbackState }) {
  const controls = useAnimationControls();

  // 🔧 Utilidad para extraer valores "initial" o "animate"
  const extractMotionValues = (props, type = 'initial') => {
    return Object.fromEntries(
      Object.entries(props).map(([key, value]) => [key, value[type]])
    );
  };

  useEffect(() => {
    if (playbackState === 'play') {
      controls.start({
        ...extractMotionValues(motionProps, 'animate'),
        transition: { ...transitionProps },
      });
    } else if (playbackState === 'reset') {
      controls.set({
        ...extractMotionValues(motionProps, 'initial'),
      });
    }
    // pausa se maneja de forma pasiva (sin trigger)
  }, [playbackState, motionProps, transitionProps, controls]);

  return (
    <div className={styles.preview}>
      <motion.div className={styles.motionBox} animate={controls}>
        <img src={m} alt="Elemento animado" className={styles.logo} />
      </motion.div>
    </div>
  );
}

export default MotionPreview;
