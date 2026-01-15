import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function RepeatTypeExample() {
  return (
    <CodeDemo code={content.repeatType.code} description={content.repeatType.description}>
      <motion.img
        src={m}
        alt="Repeat Type"
        className={styles.circle}
        initial={{ y: 0 }}
        animate={{ y: 150 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
      />
    </CodeDemo>
  );
}
