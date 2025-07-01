import React from 'react';
import RepeatExample from './RepeatExample';
import RepeatTypeExample from './RepeatTypeExample';
import DelayExample from './DelayExample';
import EaseExample from './EaseExample';

export default function TransitionsCatalog() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <RepeatExample />
      <RepeatTypeExample />
      <DelayExample />
      <EaseExample />
    </div>
  );
}
