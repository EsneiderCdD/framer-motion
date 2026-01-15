import DragMoveExample from "./Properties/DragMoveExample";
import DragConstraintExample from "./Properties/DragConstraintExample";
import DragElastic from "./Properties/DragElastic";
import DragEvents from "./Properties/DragEvents";
import styles from "./styles/Properties.module.css";

export default function Lesson1() {
  return (
    <div className={styles.container}>
      <h4 style={{ fontSize: "2.5rem" }}>Gesturas</h4>

      <DragMoveExample />
      <DragConstraintExample />
      <DragElastic />
      <DragEvents />

    </div>
  );
}
