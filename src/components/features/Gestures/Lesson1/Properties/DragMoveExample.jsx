import { motion } from "framer-motion";
import styles from "../styles/Properties.module.css";
import CodeDemo from "@/components/shared/CodeDemo/CodeDemo";
import { content } from "../data/content.jsx";

export default function DragMoveExample() {
  return (
    <CodeDemo code={content.move.code} description={content.move.description}>
      <motion.div
        drag
        className={styles.circleWrapper}
        style={{ backgroundColor: "#F6EA11" }}
      >
        <div className={styles.circle}></div>
      </motion.div>
    </CodeDemo>
  );
}
