import styles from './DualColorInput.module.css';

function DualColorInput({ label, value, onChange }) {
  return (
    <div className={styles.dualInputRow}>
      <span className={styles.label}>{label}</span>
      <input
        type="color"
        value={value.initial}
        onChange={e => onChange({ ...value, initial: e.target.value })}
        className={styles.input}
        title="Initial color"
      />
      <input
        type="color"
        value={value.animate}
        onChange={e => onChange({ ...value, animate: e.target.value })}
        className={styles.input}
        title="Animate color"
      />
    </div>
  );
}

export default DualColorInput;
