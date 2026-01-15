import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.svg';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function VariantStagger() {
  return (
    <CodeDemo code={content.stagger.code} description={content.stagger.description}>
      <motion.div
        className={styles.circleWrapper}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[...Array(3)].map((_, i) => (
          <motion.img
            key={i}
            src={m}
            alt="logo"
            className={styles.circle}
            variants={childVariants}
          />
        ))}
      </motion.div>
    </CodeDemo>
  );
}
