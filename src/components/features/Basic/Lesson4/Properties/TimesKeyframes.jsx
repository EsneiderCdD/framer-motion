import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function TimesKeyframes() {
  return (
    <CodeDemo code={content.times.code} description={content.times.description}>
      <motion.img
        src={m}
        alt="Times Keyframes"
        className={styles.circle}
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 3, times: [0, 0.3, 1], repeat: Infinity }}
      />
    </CodeDemo>
  );
}
