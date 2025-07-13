import DualNumberInput from '../shared/DualNumberInput';

function TransformControls({ motionProps, setMotionProp }) {
  return (
    <div>
      <h3>Transformación</h3>
      <DualNumberInput
        label="Scale"
        value={motionProps.scale}
        onChange={val => setMotionProp('scale', 'initial', val.initial) || setMotionProp('scale', 'animate', val.animate)}
      />
      <DualNumberInput
        label="Rotate"
        value={motionProps.rotate}
        onChange={val => setMotionProp('rotate', 'initial', val.initial) || setMotionProp('rotate', 'animate', val.animate)}
      />
    </div>
  );
}

export default TransformControls;
