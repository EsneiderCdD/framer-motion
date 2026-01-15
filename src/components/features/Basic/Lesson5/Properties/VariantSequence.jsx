import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.svg';
import CodeDemo from '@/components/shared/CodeDemo/CodeDemo';
import { content } from '../data/content.jsx';

const variants = {
  start: { x: 0, rotate: 0 },
  mid: { x: 100, rotate: 90 },
  end: { x: 0, rotate: 0 }
};

export default function VariantSequence() {
  const [step, setStep] = useState('start');

  useEffect(() => {
    const sequence = ['start', 'mid', 'end'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % sequence.length;
      setStep(sequence[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CodeDemo code={content.sequence.code} description={content.sequence.description}>
      <motion.img
        src={m}
        alt="logo"
        className={styles.circle}
        variants={variants}
        animate={step}
        transition={{ duration: 0.6 }}
      />
    </CodeDemo>
  );
}
