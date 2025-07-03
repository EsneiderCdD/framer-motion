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
      alt="Ease Linear"
      className={styles.circle}
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
    />*/}
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
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
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



