import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function DelayExample() {
  return (
    <CodeDemo code={content.delay.code} description={content.delay.description}>
      <motion.img
        src={m}
        alt="Delay"
        className={styles.circle}
        initial={{ scale: 1 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </CodeDemo>
  );
}

