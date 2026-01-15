import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function OpacityExample() {
  return (
    <CodeDemo code={content.opacity.code} description={content.opacity.description}>
      <motion.img
        src={m}
        alt="Opacidad"
        className={styles.circle}
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
    </CodeDemo>
  );
}
