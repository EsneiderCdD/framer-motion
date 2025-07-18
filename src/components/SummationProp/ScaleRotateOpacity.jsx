import { motion } from 'framer-motion';
import styles from './Summation.module.css';
import m from '../../assets/images/m.png';
import { useState } from 'react';

export default function ScaleRotateOpacity() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.img
  src={m}
  initial={{ scale: 0.5, rotate: 0, opacity: 0 }}
  animate={{ scale: 1, rotate: 360, opacity: 1 }}
  transition={{ opacity: { duration: 3, delay: 0 },
                scale: { duration: 3, delay: 3 },
                rotate: { duration: 3, delay: 6 }
  }}
/>`;

  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <button onClick={() => setShowCode(prev => !prev)}>
          {showCode ? 'i' : '<>'}
        </button>
      </div>
      <div className={styles.item}>
        <motion.img
          src={m}
          className={styles.circle}
          initial={{ scale: 0.5, rotate: 0, opacity: 0 }}
          animate={{ scale: 1, rotate: 360, opacity: 1 }}
          transition={{
            opacity: { duration: 3, delay: 0 },
            scale: { duration: 3, delay: 3 },
            rotate: { duration: 3, delay: 6 }
          }}
        />
      </div>
      <div className={styles.item}>
        {showCode ? (
          <pre className={styles.codeBlock}>
            <code>{codeString}</code>
          </pre>
        ) : (
          <p>
            Este ejemplo muestra cómo aplicar múltiples transformaciones en secuencia. 
            Usamos <strong>scale</strong>, <strong>rotate</strong> y <strong>opacity</strong> con transiciones personalizadas por propiedad, usando <code>delay</code> para encadenarlas. 
            Es útil para crear entradas más rítmicas y controladas visualmente.
          </p>
        )}
      </div>
    </div>
  );
}
