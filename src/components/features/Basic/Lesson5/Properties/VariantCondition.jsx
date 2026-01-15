import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.svg';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

const variants = {
  active: { x: 100, scale: 1.2 },
  inactive: { x: 0, scale: 1 }
};

export default function VariantCondition() {
  const [isActive, setIsActive] = useState(false);

  return (
    <CodeDemo code={content.condition.code} description={content.condition.description}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <button className={styles.toggleButton} onClick={() => setIsActive(!isActive)}>
          Toggle Estado
        </button>
        <motion.img
          src={m}
          alt="logo"
          className={styles.circle}
          variants={variants}
          animate={isActive ? 'active' : 'inactive'}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </div>
    </CodeDemo>
  );
}
