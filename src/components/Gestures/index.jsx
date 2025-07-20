// gestures/index.jsx
import DragMoveExample from "./DragMoveExample";
import DragConstraintExample from "./DragConstraintExample";
import styles from "./styles.module.css";

export default function GestureCatalog() {
  return (
    <div className={styles.container}>
      <h4 style={{ fontSize: "2.5rem" }}>Gesturas</h4>

      <DragMoveExample />
      <DragConstraintExample />
    </div>
  );
}
