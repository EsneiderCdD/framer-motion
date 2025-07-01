// src/animations/basicos/CirclePerfect.jsx
import AnimationBox from '../../components/AnimationBox/AnimationBox';
import styles from './Slide.module.css';
import { generateCircleKeyframes } from '../../utils/generateCircleKeyFrames';

const circleMotion = generateCircleKeyframes(40, 100);



function CirclePerfect() {
  const codeString = 
`<motion.div
    initial: { x: circleMotion.x[0], y: circleMotion.y[0] },
    animate: { x: circleMotion.x, y: circleMotion.y },
  
    transition={{ duration: 10 }}
>
  Slide X
</motion.div>`;

  return (
    <AnimationBox
        initial= {{ x: circleMotion.x[0], y: circleMotion.y[0] }}
      animate= {{ x: circleMotion.x, y: circleMotion.y }}
      transition={{ duration: 10 }}
    >
      <p>
        Este es un ejemplo básico de movimiento en el eje X usando Framer Motion.
        Aquí configuramos <strong>initial</strong> como <code>x: -100</code>, lo que significa que empieza 100 píxeles a la izquierda.
      </p>

      <p>
        Luego, <strong>animate</strong> mueve el elemento a <code>x: 0</code>, su posición original,
        y la <strong>transition</strong> define que este cambio tarda 1 segundo.
      </p>

      <pre className={styles.codeBlock}>
        <code>{codeString}</code>
      </pre>

      {/* Enlace para descargar el documento */}
      <a
        href="/documents/01.docx"
        download
        style={{ display: 'inline-block', marginTop: '1rem', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
      >
        Descargar documento
      </a>

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

    </AnimationBox>
  );
}

export default CirclePerfect;