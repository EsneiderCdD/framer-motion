




import ColorExample from './Properties/ColorExample';
import styles from './styles/Properties.module.css';

export default function Lesson2() {
  return (
    <div className={styles.container}>

      <div>
        <h4 style={{ fontSize: '2.5rem' }}>Otras Propiedades</h4>
        <ColorExample />
      </div>
    </div>
  );
}
