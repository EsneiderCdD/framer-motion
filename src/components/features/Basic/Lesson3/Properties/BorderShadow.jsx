import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

export default function BorderExample() {
  return (
    <CodeDemo code={content.borderShadow.code} description={content.borderShadow.description}>
      <motion.div
        className={styles.circleWrapper}
        initial={{ backgroundColor: '#F6EA11', borderRadius: '0%' }}
        animate={{ backgroundColor: '#000000', borderRadius: '50%' }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <img src={m} alt="Colores" className={styles.circle} />
      </motion.div>
    </CodeDemo>
  );
}
