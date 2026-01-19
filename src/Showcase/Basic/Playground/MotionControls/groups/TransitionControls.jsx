function TransitionControls({ transitionProps, setTransitionProp }) {
  return (
    <>
      <label>
        Duration:
        <input
          type="number"
          step="0.1"
          value={transitionProps.duration}
          onChange={e => setTransitionProp('duration', parseFloat(e.target.value))}
        />
      </label>

      <label>
        Ease:
        <select
          value={transitionProps.ease}
          onChange={e => setTransitionProp('ease', e.target.value)}
        >
          <option value="easeInOut">easeInOut</option>
          <option value="easeIn">easeIn</option>
          <option value="easeOut">easeOut</option>
          <option value="linear">linear</option>
          <option value="circIn">circIn</option>
          <option value="backOut">backOut</option>
          <option value="anticipate">anticipate</option>
        </select>
      </label>

      <label>
        Repeat:
        <input
          type="number"
          value={transitionProps.repeat}
          onChange={e => setTransitionProp('repeat', parseInt(e.target.value))}
        />
      </label>

      <label>
        Repeat Type:
        <select
          value={transitionProps.repeatType}
          onChange={e => setTransitionProp('repeatType', e.target.value)}
        >
          <option value="loop">loop</option>
          <option value="reverse">reverse</option>
          <option value="mirror">mirror</option>
        </select>
      </label>
    </>
  );
}

export default TransitionControls;
