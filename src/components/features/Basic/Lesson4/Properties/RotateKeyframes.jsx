import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function RotateKeyframes() {
  return (
    <CodeDemo code={content.rotate.code} description={content.rotate.description}>
      <motion.img
        src={m}
        alt="Rotate Keyframes"
        className={styles.circle}
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
      />
    </CodeDemo>
  );
}
