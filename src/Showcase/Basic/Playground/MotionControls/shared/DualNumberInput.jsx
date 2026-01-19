import styles from './DualNumberInput.module.css';

function DualNumberInput({ label, value, onChange }) {
  return (
    <div className={styles.dualInputRow}>
      <span className={styles.label}>{label}</span>
      <input
        type="number"
        value={value.initial}
        onChange={e => onChange({ ...value, initial: parseFloat(e.target.value) })}
        className={styles.input}
        placeholder="Initial"
      />
      <input
        type="number"
        value={value.animate}
        onChange={e => onChange({ ...value, animate: parseFloat(e.target.value) })}
        className={styles.input}
        placeholder="Animate"
      />
    </div>
  );
}

export default DualNumberInput;
