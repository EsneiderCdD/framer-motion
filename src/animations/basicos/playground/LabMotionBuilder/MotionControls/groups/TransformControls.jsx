function TransformControls({ motionProps, setMotionProp }) {
  return (
    <>
      <label>
        Scale:
        <input
          type="number"
          step="0.1"
          value={motionProps.scale}
          onChange={e => setMotionProp('scale', parseFloat(e.target.value))}
        />
      </label>
      <label>
        Rotate:
        <input
          type="number"
          value={motionProps.rotate}
          onChange={e => setMotionProp('rotate', parseInt(e.target.value))}
        />
      </label>
    </>
  );
}

export default TransformControls;
