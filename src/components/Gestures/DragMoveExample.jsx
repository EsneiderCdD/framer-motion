import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

export default function DragMoveExample() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.div drag>
  Arrástrame libremente
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
          className={styles.circleWrapper}
          style={{ backgroundColor: "#F6EA11" }}
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
            Este ejemplo muestra cómo arrastrar un elemento sin restricciones. La propiedad{" "}
            <strong>drag</strong> permite movimiento libre en el contenedor.
          </p>
        )}
      </div>
    </div>
  );
}
