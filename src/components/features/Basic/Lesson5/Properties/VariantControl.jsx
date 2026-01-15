import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.svg';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

const variants = {
  on: { scale: 1.2, rotate: 360 },
  off: { scale: 1, rotate: 0 }
};

export default function VariantControl() {
  const [active, setActive] = useState(false);

  return (
    <CodeDemo code={content.control.code} description={content.control.description}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <button className={styles.toggleButton} onClick={() => setActive(!active)}>
          {active ? 'Desactivar' : 'Activar'}
        </button>
        <motion.img
          src={m}
          alt="logo"
          className={styles.circle}
          variants={variants}
          animate={active ? 'on' : 'off'}
          transition={{ duration: 0.5 }}
        />
      </div>
    </CodeDemo>
  );
}
