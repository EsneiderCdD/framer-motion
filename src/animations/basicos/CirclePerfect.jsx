import AnimationBox from '../../components/shared/AnimationBox/AnimationBox';
import styles from './Slide.module.css';
import { generateCircleKeyframes } from '../../utils/generateCircleKeyFrames';

const circleMotion = generateCircleKeyframes(40, 100);

function CirclePerfect() {
  const codeString = 
`<motion.div
  initial={{ x: circleMotion.x[0], y: circleMotion.y[0] }}
  animate={{ x: circleMotion.x, y: circleMotion.y }}
  transition={{ duration: 10 }}
>
  Slide X
</motion.div>`;

  return (
    <AnimationBox
      initial={{ x: circleMotion.x[0], y: circleMotion.y[0] }}
      animate={{ x: circleMotion.x, y: circleMotion.y }}
      transition={{ duration: 10 }}
    >
      <h2>Movimiento en el eje XY</h2> 
      <h3>Trigonometria y Animaciones</h3>

      <div className={styles.content}>
        <div className={styles.txt}>
          <p>
            Hasta ahora exploramos animaciones lineales y secuenciales usando valores fijos o secuencias definidas con keyframes. 
            Pero ¿qué sucede si queremos lograr un movimiento circular perfecto? Aquí es donde entra en juego un enfoque diferente: 
            generar dinámicamente los valores de <code>x</code> y <code>y</code> para trazar el círculo a través del tiempo.
          </p>
          <p>
            En este ejemplo usamos una función que calcula coordenadas en un círculo, y Framer Motion las interpreta como una animación continua en dos ejes. 
            Es el primer paso hacia animaciones personalizadas más avanzadas y con mayor control que los keyframes simples.
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
    </AnimationBox>
  );
}

export default CirclePerfect;
