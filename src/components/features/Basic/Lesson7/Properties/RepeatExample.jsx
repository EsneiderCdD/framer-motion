import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function RepeatExample() {
  return (
    <CodeDemo code={content.repeat.code} description={content.repeat.description}>
      <motion.img
        src={m}
        alt="Repeat"
        className={styles.circle}
        initial={{ x: 0 }}
        animate={{ x: 150 }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </CodeDemo>
  );
}
