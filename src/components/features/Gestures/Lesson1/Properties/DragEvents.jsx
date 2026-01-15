import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Properties.module.css";
import CodeDemo from "@/components/shared/CodeDemo/CodeDemo";
import { content } from "../data/content.jsx";

export default function DragEvents() {
  const [eventInfo, setEventInfo] = useState("Arrástrame para ver los eventos");

  return (
    <CodeDemo code={content.events.code} description={content.events.description}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '100%' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#555', minHeight: '1.5em' }}>
          {eventInfo}
        </p>
        <motion.div
          drag
          onDragStart={() => setEventInfo("🚀 Inició el drag")}
          onDrag={(e, info) => setEventInfo(`📍 x=${Math.round(info.point.x)}, y=${Math.round(info.point.y)}`)}
          onDragEnd={() => setEventInfo("✅ Finalizó el drag")}
          className={styles.circleWrapper}
          style={{ backgroundColor: "#2EC4B6" }}
        >
          <div className={styles.circle}></div>
        </motion.div>
      </div>
    </CodeDemo>
  );
}
