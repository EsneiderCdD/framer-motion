
import ScaleExample from './ScaleExample';
import RotateExample from './RotateExample';
import OpacityExample from './OpacityExample';
import SizeExample from './SizeExample';
import ColorExample from './ColorExample';
import styles from './Animations.module.css';
export default function AnimationCatalog() {
  return (
    <div className={styles.container  }>
      
      <div>

        <h4 style={{fontSize: '2.5rem'}}>Otras Propiedades</h4>

        <ScaleExample />
        <RotateExample />
        <OpacityExample />
        <SizeExample />
        <ColorExample />
       


        
      </div>
     
    </div>
  );
}
