// src/animations/basicos/Duration.jsx
import AnimationDualBox from '../../components/AnimationDualBox/AnimationDualBox';
import styles from './SlideDual.module.css';

import DurationCatalog from '../../components/Duration/index';

function Duration() {
  const codeString = `<motion.div
  initial={{ x: 0, y: 0 }}
  animate={{
    x: [0, 70, 100, 70, 0, -70, -100, -70, 0],
    y: [-100, -70, 0, 70, 100, 70, 0, -70, -100]
  }}
  transition={{ duration: 10 }}
>
  Slide X
</motion.div>`;

  return (
    <AnimationDualBox
      animation1={{
        initial: { y: -100 },
        animate: { y: 100 },
        transition: {
          duration: 2.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }}
      animation2={{
        initial: { y: -100 },
        animate: { y: 100 },
        transition: {
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }}
    >
      <h2>Durationimiento en el eje XY</h2> 
                     <h3>Initial, Animate y Transition </h3>
                     <div className={styles.content}>
                       <div className={styles.txt}>
                         <p>
                           Este es un ejemplo básico de Durationimiento en el eje X usando Framer Motion.
                           Aquí configuramos <strong>initial</strong> como <code>x: -100</code>, lo que significa que empieza 100 píxeles a la izquierda.
                         </p>
                         <p>
                           Luego, <strong>animate</strong> mueve el elemento a <code>x: 0</code>, su posición original,
                           y la <strong>transition</strong> define que este cambio tarda 1 segundo.
                         </p>
                       </div>
                       <pre className={styles.codeBlock}>
                         <code>{codeString}</code>
                       </pre>
                     </div>
     
     
     
           {/* Video incrustado */}
           <div style={{ marginTop: '2rem' }}>
             <iframe
               width="560"
               height="315"
               src="https://www.youtube.com/embed/2V1WK-3HQNk?si=AUDDMUo3-SFDyO8D"
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerPolicy="strict-origin-when-cross-origin"
               allowFullScreen
             ></iframe>
           </div>
     
                 {/* Enlace para descargar el documento */}
           <a
             href="/documents/01.docx"
             download
             style={{ display: 'inline-block', marginTop: '1rem', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
           >
             Descargar documento
           </a>

      <DurationCatalog />
    </AnimationDualBox>
  );
}

export default Duration;
