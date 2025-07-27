// src/components/Variants/VariantSequence.jsx

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import m from '../../assets/images/m.svg';

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
    <div className={styles.box}>
      <div className={styles.item}>
        <div>
          <h3>Secuencia con variants</h3>
          <p>
            Puedes secuenciar animations con lógica propia. Aquí, el variant cambia cada segundo para simular una secuencia automática.
          </p>
        </div>

        <motion.img
          src={m}
          alt="logo"
          className={styles.circle}
          variants={variants}
          animate={step}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
}
