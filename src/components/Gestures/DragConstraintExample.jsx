import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

export default function DragConstraintExample() {
  const [showCode, setShowCode] = useState(false);
  const constraintsRef = useRef(null);

  const codeString = `<motion.div drag dragConstraints={constraintsRef}>
  Elemento limitado
</motion.div>`;

  return (
    <div ref={constraintsRef} className={styles.box}>
      <div className={styles.item}>
        <button onClick={() => setShowCode((prev) => !prev)}>
          {showCode ? "i" : "<>"}
        </button>
      </div>

      <div className={styles.item}>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          className={styles.circleWrapper}
          style={{ backgroundColor: "#007bff" }}
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
            Con <strong>dragConstraints</strong> se puede limitar el área en la que se
            puede mover el elemento. Aquí se utiliza una referencia al contenedor padre.
          </p>
        )}
      </div>
    </div>
  );
}
