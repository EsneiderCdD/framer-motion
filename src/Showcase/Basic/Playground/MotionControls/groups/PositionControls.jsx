import DualNumberInput from '../shared/DualNumberInput';

function PositionControls({ motionProps, setMotionProp }) {
  return (
    <div>
      <h3>Desplazamiento</h3>
      <DualNumberInput
        label="X"
        value={motionProps.x}
        onChange={val => setMotionProp('x', 'initial', val.initial) || setMotionProp('x', 'animate', val.animate)}
      />
      <DualNumberInput
        label="Y"
        value={motionProps.y}
        onChange={val => setMotionProp('y', 'initial', val.initial) || setMotionProp('y', 'animate', val.animate)}
      />
    </div>
  );
}

export default PositionControls;

