import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function SizeExample() {
  return (
    <CodeDemo code={content.size.code} description={content.size.description}>
      <motion.img
        src={m}
        alt="Tamaño"
        className={styles.circle}
        initial={{ width: '100px', height: '100px' }}
        animate={{ width: '150px', height: '150px' }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      />
    </CodeDemo>
  );
}
