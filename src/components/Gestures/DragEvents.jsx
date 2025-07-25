import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

export default function DragEvents() {
  const [showCode, setShowCode] = useState(false);
  const [eventInfo, setEventInfo] = useState("Arrástrame para ver los eventos");

  const codeString = `<motion.div 
  drag 
  onDragStart={() => console.log("Inicia el drag")} 
  onDrag={(e, info) => console.log(info.point)} 
  onDragEnd={() => console.log("Finaliza el drag")}
>
  Elemento con eventos
</motion.div>`;

  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <button onClick={() => setShowCode((prev) => !prev)}>
          {showCode ? "i" : "<>"}
        </button>
      </div>

      <div className={styles.item}>
        <motion.div
          drag
          onDragStart={() => setEventInfo("🚀 Inició el drag")}
          onDrag={(e, info) => setEventInfo(`📍 Posición: x=${Math.round(info.point.x)}, y=${Math.round(info.point.y)}`)}
          onDragEnd={() => setEventInfo("✅ Finalizó el drag")}
          className={styles.circleWrapper}
          style={{ backgroundColor: "#2EC4B6" }}
        >
          <div className={styles.circle}></div>
        </motion.div>
      </div>

      <div className={styles.item}>
        {showCode ? (
          <pre className={styles.codeBlock}>
            <code>{codeString}</code>
          </pre>
        ) : (
          <p>
            Este componente muestra cómo usar los eventos de Framer Motion:
            <br />
            <strong>onDragStart</strong> se dispara al iniciar el arrastre,
            <br />
            <strong>onDrag</strong> proporciona información en tiempo real del movimiento (posición),
            <br />
            y <strong>onDragEnd</strong> indica cuándo se suelta el elemento.
            <br />
            <br />
            <em>Estado actual:</em><br />
            <strong>{eventInfo}</strong>
          </p>
        )}
      </div>
    </div>
  );
}
