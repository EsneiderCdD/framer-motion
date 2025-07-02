
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
