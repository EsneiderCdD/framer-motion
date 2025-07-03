
 

import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function CombinedKeyframes() {
  return (
    <div className={styles.box}>
      
      <div className={styles.item}>
        <pre>
          <code>
            {`<motion.img
  src={m}
  alt="Opacidad"
  className={styles.circle}
  initial={{ opacity: 0.2 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2, 
  repeat: Infinity, 
  repeatType: 'reverse' 
  }}
/>`}

{/* CAMBIAR
      
       <motion.img
      src={m}
      alt="Combined Keyframes"
      className={styles.circle}
      animate={{
        x: [0, 50, 0, -50, 0],
        scale: [1, 1.2, 1, 0.8, 1],
        opacity: [1, 0.5, 0.2, 0.5, 1]
      }}
      transition={{ duration: 4, repeat: Infinity }}
    />*/}
          </code>
        </pre>
      </div>

      <div className={styles.item}>
      
      <motion.img
      src={m}
      alt="Combined Keyframes"
      className={styles.circle}
      animate={{
        x: [0, 50, 0, -50, 0],
        scale: [1, 1.2, 1, 0.8, 1],
        opacity: [1, 0.5, 0.2, 0.5, 1]
      }}
      transition={{ duration: 4, repeat: Infinity }}
    />
      </div>

      <div className={styles.item}>
       <p>
  La propiedad <strong>opacity</strong> en Framer Motion controla la transparencia de un elemento. Un valor de <strong>opacity: 0</strong> lo hace invisible y <strong>opacity: 1</strong> lo hace totalmente visible. <br /><br />
  En este caso, la animación varía entre <strong>opacity: 0.2</strong> y <strong>opacity: 1</strong>, creando un efecto de aparición y desaparición continuo.
</p>

      </div>
    </div>
  );
}




