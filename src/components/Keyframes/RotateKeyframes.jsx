import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function RotateKeyframes() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.img
  src={m}
  alt="Rotate Keyframes"
  className={styles.circle}
  animate={{ rotate: [0, 90, 180, 270, 360] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatType: 'mirror'
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
          alt="Rotate Keyframes"
          className={styles.circle}
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
        />
      </div>
      <div className={styles.item}>
        {showCode ? (
          <pre className={styles.codeBlock}>
            <code>{codeString}</code>
          </pre>
        ) : (
          <p>
            La imagen rota de <code>0°</code> a <code>360°</code> en cinco pasos durante 4 segundos, avanzando 90° por segundo. 
            Con <code>repeatType: 'mirror'</code>, la animación se reproduce en reversa temporalmente. 
            A diferencia de <code>'reverse'</code>, que invierte el array, <code>'mirror'</code> invierte la dirección del tiempo.
          </p>
        )}
      </div>
    </div>
  );
}
