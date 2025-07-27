import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

export default function DragElastic() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.div 
  drag 
  dragElastic={0.8} 
  dragMomentum={true}
>
  ¡Arrástrame con rebote e inercia!
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
          dragElastic={0.8}
          dragMomentum={true}
          className={styles.circleWrapper}
          style={{ backgroundColor: "#FF9F1C" }}
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
            Este ejemplo combina dos propiedades que mejoran la experiencia de arrastre:
            <br />
            <strong>dragElastic</strong> controla la resistencia del elemento cuando intenta salir de los límites. Un valor cercano a <code>1</code> permite mayor libertad de movimiento tipo "rebote".
            <br />
            <strong>dragMomentum</strong> añade inercia al soltar el elemento, haciendo que continúe su movimiento brevemente según la velocidad con la que fue arrastrado.
            <br />
            Ambas propiedades ofrecen una experiencia más natural e intuitiva.
          </p>
        )}
      </div>
    </div>
  );
}
