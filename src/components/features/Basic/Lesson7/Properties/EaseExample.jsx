import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function EaseExample() {
  return (
    <CodeDemo code={content.ease.code} description={content.ease.description}>
      <motion.img
        src={m}
        alt="Ease"
        className={styles.circle}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
      />
    </CodeDemo>
  );
}


