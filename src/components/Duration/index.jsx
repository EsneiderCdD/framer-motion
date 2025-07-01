import React from 'react';
import DurationComparison from './DurationComparison';
import EaseLinear from './EaseLinear';
import EaseIn from './EaseIn';
import EaseOut from './EaseOut';
import EaseInOut from './EaseInOut';

export default function DurationCatalog() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <DurationComparison />
      <EaseLinear />
      <EaseIn />
      <EaseOut />
      <EaseInOut />
    </div>
  );
}
