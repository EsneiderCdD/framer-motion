
import ScaleExample from './ScaleExample';
import RotateExample from './RotateExample';
import OpacityExample from './OpacityExample';
import SizeExample from './SizeExample';
import ColorExample from './ColorExample';
import BorderShadowExample from './BorderShadowExample';
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
        <BorderShadowExample />


        
      </div>
     
    </div>
  );
}
