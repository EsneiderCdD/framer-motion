import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Properties.module.css";
import CodeDemo from "@/components/shared/CodeDemo/CodeDemo";
import { content } from "../data/content.jsx";

export default function DragConstraintExample() {
  const constraintsRef = useRef(null);

  return (
    <CodeDemo code={content.constraint.code} description={content.constraint.description}>
      <div ref={constraintsRef} className={styles.constraintContainer} style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px dashed #ccc', borderRadius: '8px' }}>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          className={styles.circleWrapper}
          style={{ backgroundColor: "#007bff" }}
        >
          <div className={styles.circle}></div>
        </motion.div>
      </div>
    </CodeDemo>
  );
}
