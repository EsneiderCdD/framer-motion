


import OpacityExample from './Properties/OpacityExample';
import SizeExample from './Properties/SizeExample';
import ColorExample from './Properties/ColorExample';
import styles from './styles/Properties.module.css';

export default function Lesson2() {
  return (
    <div className={styles.container}>

      <div>
        <h4 style={{ fontSize: '2.5rem' }}>Otras Propiedades</h4>
        <OpacityExample />
        <SizeExample />
        <ColorExample />
      </div>
    </div>
  );
}
