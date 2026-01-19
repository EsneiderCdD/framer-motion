// groups/ColorControls.jsx
import DualColorInput from '../shared/DualColorInput';

function ColorControls({ motionProps, setMotionProp }) {
  return (
    <div>
      <h3>🎨 Color</h3>
      <DualColorInput
        label="Background"
        value={motionProps.backgroundColor}
        onChange={val => {
          setMotionProp('backgroundColor', 'initial', val.initial);
          setMotionProp('backgroundColor', 'animate', val.animate);
        }}
      />
    </div>
  );
}

export default ColorControls;
