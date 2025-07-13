function ColorControls({ motionProps, setMotionProp }) {
  return (
    <label>
      Background Color:
      <input
        type="color"
        value={motionProps.backgroundColor}
        onChange={e => setMotionProp('backgroundColor', e.target.value)}
      />
    </label>
  );
}

export default ColorControls;
