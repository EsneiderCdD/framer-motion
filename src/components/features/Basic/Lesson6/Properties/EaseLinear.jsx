
import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function EaseLinear() {
  return (
    <CodeDemo code={content.easeLinear.code} description={content.easeLinear.description}>
      <motion.img
        src={m}
        alt="Ease Linear"
        className={styles.circle}
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
      />
    </CodeDemo>
  );
}
