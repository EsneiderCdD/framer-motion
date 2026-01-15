
import ScaleExample from './Basic/ScaleExample';
import RotateExample from './Basic/RotateExample';
import OpacityExample from './Basic/OpacityExample';
import SizeExample from './Basic/SizeExample';
import ColorExample from './Basic/ColorExample';
import styles from './styles/Examples.module.css';
export default function AnimationCatalog() {
  return (
    <div className={styles.container}>

      <div>
        <h4 style={{ fontSize: '2.5rem' }}>Otras Propiedades</h4>
        <ScaleExample />
        <RotateExample />
        <OpacityExample />
        <SizeExample />
        <ColorExample />
      </div>
    </div>
  );
}
