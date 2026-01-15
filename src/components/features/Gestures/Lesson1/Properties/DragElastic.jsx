import { motion } from "framer-motion";
import styles from "../styles/Properties.module.css";
import CodeDemo from "@/components/shared/CodeDemo/CodeDemo";
import { content } from "../data/content.jsx";

export default function DragElastic() {
  return (
    <CodeDemo code={content.elastic.code} description={content.elastic.description}>
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.2}
        className={styles.circleWrapper}
        style={{ backgroundColor: "#FF9F1C" }}
      >
        <div className={styles.circle}></div>
      </motion.div>
    </CodeDemo>
  );
}
