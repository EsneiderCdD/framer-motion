import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function ScaleRotate() {
  return (
    <CodeDemo code={content.scaleRotate.code} description={content.scaleRotate.description}>
      <motion.div
        className={styles.circleWrapper}
        initial={{ scale: 0.5, rotate: 0 }}
        animate={{ scale: 1.5, rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      >
        <img src={m} alt="Animación combinada" className={styles.circle} />
      </motion.div>
    </CodeDemo>
  );
}
