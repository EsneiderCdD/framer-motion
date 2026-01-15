import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.svg';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function ColorExample() {
  return (
    <CodeDemo code={content.color.code} description={content.color.description}>
      <motion.div
        className={styles.circleWrapper}
        initial={{ backgroundColor: '#F6EA11' }}
        animate={{ backgroundColor: '#000000' }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <img src={m} alt="Colores" className={styles.circle} />
      </motion.div>
    </CodeDemo>
  );
}
