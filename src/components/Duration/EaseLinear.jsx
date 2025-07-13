// src/components/Duration/EaseLinear.jsx
import { motion } from 'framer-motion';
import styles from './Duration.module.css';
import m from '../../assets/images/m.png';

export default function EaseLinear() {
  return (
    <div className={styles.box}>
      
      <div className={styles.item}>
        <pre>
          <code>
{`<motion.img
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
/>`}
          </code>
        </pre>
      </div>

      <div className={styles.item}>
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
      </div>

      <div className={styles.item}>
        <p>
          Esta animación aplica un movimiento horizontal de <strong>x: -100</strong> a <strong>x: 100</strong> usando la función de <strong>ease: 'linear'</strong>, lo que significa que el cambio de posición ocurre a una velocidad constante, sin aceleración ni desaceleración. Es útil cuando se busca una animación mecánica o uniforme.
        </p>
      </div>
    </div>
  );
}



