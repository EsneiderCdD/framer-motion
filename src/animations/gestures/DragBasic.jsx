// DragBasic.jsx
import AnimationBox from "../../components/AnimationBox/AnimationBox";
import styles from "./styles.module.css";
import GestureCatalog from "../../components/Gestures/index";

function DragBasic() {
  const codeString = `<motion.div drag>Arrástrame</motion.div>`;

  return (
    <AnimationBox>
      <h2>Arrastre libre</h2>
      <h3>Propiedad: drag</h3>

      <div className={styles.content}>
        <div className={styles.txt}>
          <p>
            El componente permite arrastrar libremente el elemento al usar la propiedad <code>drag</code> de Framer Motion.
          </p>
          <p>
            Este comportamiento no tiene restricciones y puede moverse en cualquier dirección.
          </p>
        </div>

        <pre className={styles.codeBlock}>
          <code>{codeString}</code>
        </pre>
      </div>

      <a
        href="/documents/drag.docx"
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
          src="https://www.youtube.com/embed/ejemploVideo"
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

export default DragBasic;
