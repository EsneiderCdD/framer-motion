import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function EaseKeyframes() {
  return (
    <CodeDemo code={content.ease.code} description={content.ease.description}>
      <motion.img
        src={m}
        alt="Ease Keyframes"
        className={styles.circle}
        animate={{ x: [0, 100, -100, 0] }}
        transition={{
          duration: 4,
          ease: ['easeIn', 'easeOut', 'easeInOut'],
          repeat: Infinity,
        }}
      />
    </CodeDemo>
  );
}
