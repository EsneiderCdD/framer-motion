


import AnimationBox from '../../components/shared/AnimationBox/AnimationBox';
import styles from './Slide.module.css';
import Lesson4 from '../../components/features/Basic/Lesson4/Lesson4';
function Circle() {
  const codeString = `<motion.div
  initial={{ x: 0, y: 0 }}
  animate={{
        x: [0, 70, 100, 70, 0, -70, -100, -70, 0],
        y: [-100, -70, 0, 70, 100, 70, 0, -70, -100]
      }}
  transition={{ duration: 10 }}
>
  Circle
</motion.div>`;

  return (
    <AnimationBox
      initial={{ x: 0, y: 0 }}
      animate={{
        x: [0, 70, 100, 70, 0, -70, -100, -70, 0],
        y: [-100, -70, 0, 70, 100, 70, 0, -70, -100]
      }}
      transition={{ duration: 10 }}
    >
      <h2>Vuelta</h2>
      <h3>Initial, Animate y Transition </h3>
      <div className={styles.content}>
        <div className={styles.txt}>
          <p>
            En esta sección introducimos el uso de <strong>keyframes</strong> en Framer Motion, una técnica que permite definir secuencias de valores para una propiedad, generando movimientos más complejos y fluidos. En lugar de animar de un punto A a un punto B, especificamos una lista de valores intermedios que el elemento recorrerá en orden, creando trayectorias como curvas, zigzags o ciclos.
          </p>
          <p>
            El siguiente ejemplo aplica esta técnica sobre los ejes <code>x</code> y <code>y</code>. Definimos una lista de valores para cada uno, creando una animación que simula un recorrido circular. Esta secuencia se controla mediante la propiedad <code>transition</code>, especificando su duración total.
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

      <Lesson4 />

    </AnimationBox>
  );
}

export default Circle;
