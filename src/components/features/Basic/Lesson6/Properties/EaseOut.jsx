import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function EaseOut() {
  return (
    <CodeDemo code={content.easeOut.code} description={content.easeOut.description}>
      <motion.img
        src={m}
        alt="Ease Out"
        className={styles.circle}
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeOut'
        }}
      />
    </CodeDemo>
  );
}
