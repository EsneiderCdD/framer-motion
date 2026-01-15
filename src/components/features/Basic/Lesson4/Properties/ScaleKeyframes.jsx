import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function ScaleKeyframes() {
  return (
    <CodeDemo code={content.scale.code} description={content.scale.description}>
      <motion.img
        src={m}
        alt="Scale Keyframes"
        className={styles.circle}
        animate={{ scale: [1, 1.5, 1, 0.5, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </CodeDemo>
  );
}
