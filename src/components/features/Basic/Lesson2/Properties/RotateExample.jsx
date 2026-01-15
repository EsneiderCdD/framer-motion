import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function RotateExample() {
  return (
    <CodeDemo code={content.rotate.code} description={content.rotate.description}>
      <motion.img
        src={m}
        alt="Rotación"
        className={styles.circle}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.img
        src={m}
        alt="Rotación X"
        className={styles.circle}
        initial={{ rotateX: 0 }}
        animate={{ rotateX: 360 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.img
        src={m}
        alt="Rotación Y"
        className={styles.circle}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </CodeDemo>
  );
}
