import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function ScaleRotateOpacity() {
  return (
    <CodeDemo code={content.scaleRotateOpacity.code} description={content.scaleRotateOpacity.description}>
      <motion.img
        src={m}
        className={styles.circle}
        initial={{ scale: 0.5, rotate: 0, opacity: 0 }}
        animate={{ scale: 1, rotate: 360, opacity: 1 }}
        transition={{
          opacity: { duration: 3, delay: 0 },
          scale: { duration: 3, delay: 3 },
          rotate: { duration: 3, delay: 6 }
        }}
      />
    </CodeDemo>
  );
}
