import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function ScaleExample() {
  return (
    <CodeDemo code={content.scale.code} description={content.scale.description}>
      <motion.img
        src={m}
        alt="Escala"
        className={styles.circle}
        initial={{ scale: 1.5 }}
        animate={{ scale: 0 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </CodeDemo>
  );
}
