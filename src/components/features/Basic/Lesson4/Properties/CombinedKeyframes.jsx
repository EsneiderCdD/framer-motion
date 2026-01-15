import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function CombinedKeyframes() {
  return (
    <CodeDemo code={content.combined.code} description={content.combined.description}>
      <motion.img
        src={m}
        alt="Combined Keyframes"
        className={styles.circle}
        animate={{
          x: [0, 50, 0, -50, 0],
          scale: [1, 1.2, 1, 0.8, 1],
          opacity: [1, 0.5, 0.2, 0.5, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </CodeDemo>
  );
}
