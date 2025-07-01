import React from 'react';
import MotionZExample from './MotionZExample';
import ScaleExample from './ScaleExample';
import RotateExample from './RotateExample';
import OpacityExample from './OpacityExample';
import SizeExample from './SizeExample';
import ColorExample from './ColorExample';
import BorderShadowExample from './BorderShadowExample';

export default function AnimationCatalog() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <MotionZExample />
      <ScaleExample />
      <RotateExample />
      <OpacityExample />
      <SizeExample />
      <ColorExample />
      <BorderShadowExample />
    </div>
  );
}
