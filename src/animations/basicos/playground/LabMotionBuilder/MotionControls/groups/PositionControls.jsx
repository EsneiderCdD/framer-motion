function PositionControls({ motionProps, setMotionProp }) {
  return (
    <>
      <label>
        X:
        <input
          type="number"
          value={motionProps.x}
          onChange={e => setMotionProp('x', parseInt(e.target.value))}
        />
      </label>
      <label>
        Y:
        <input
          type="number"
          value={motionProps.y}
          onChange={e => setMotionProp('y', parseInt(e.target.value))}
        />
      </label>
    </>
  );
}

export default PositionControls;
