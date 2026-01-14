// DragConstraints.jsx
import AnimationBox from "../../components/shared/AnimationBox/AnimationBox";
import styles from "./styles.module.css";
import GestureCatalog from "../../components/Drag/index";
function DragConstraints() {
  const codeString = `<motion.div drag dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}>
  Arrástrame dentro del área
</motion.div>`;

  return (
    <AnimationBox>
      <h2>Arrastre limitado</h2>
      <h3>Propiedad: dragConstraints</h3>

      <div className={styles.content}>
        <div className={styles.txt}>
          <p>
            Este componente permite arrastrar el elemento solo dentro de un rango
            específico definido por la propiedad <code>dragConstraints</code>.
          </p>
          <p>
            Es útil cuando se quiere restringir el movimiento a un área específica.
          </p>
        </div>

        <pre className={styles.codeBlock}>
          <code>{codeString}</code>
        </pre>
      </div>

      <a
        href="/documents/drag-constraints.docx"
        download
        style={{
          display: "inline-block",
          marginTop: "1rem",
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Descargar documento
      </a>

      <div style={{ marginTop: "2rem" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ejemploVideoConstraints"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <GestureCatalog />
    </AnimationBox>
  );
}

export default DragConstraints;
