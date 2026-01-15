import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function OpacityKeyframes() {
  return (
    <CodeDemo code={content.opacity.code} description={content.opacity.description}>
      <motion.img
        src={m}
        alt="Opacity Keyframes"
        className={styles.circle}
        animate={{ opacity: [1, 0.5, 0, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </CodeDemo>
  );
}
