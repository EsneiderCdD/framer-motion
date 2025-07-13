import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import styles from './styles.module.css';
import m from '../../../../../assets/images/m.png';

function MotionPreview({ motionProps, transitionProps, playbackState }) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (playbackState === 'play') {
      controls.start({
        ...motionProps.animate,
        transition: { ...transitionProps }
      });
    } else if (playbackState === 'reset') {
      controls.set({ ...motionProps.initial });
    }
    // pausa se maneja de forma pasiva (sin trigger)
  }, [playbackState, motionProps, transitionProps, controls]);

  return (
    <div className={styles.preview}>
      <motion.div
        className={styles.motionBox}
        animate={controls}
      >
        <img src={m} alt="Elemento animado" className={styles.logo} />
      </motion.div>
    </div>
  );
}

export default MotionPreview;
