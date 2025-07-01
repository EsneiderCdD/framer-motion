import React from 'react';
import BasicMovement from './BasicMovement';
import ScaleKeyframes from './ScaleKeyframes';
import RotateKeyframes from './RotateKeyframes';
import OpacityKeyframes from './OpacityKeyframes';
import CombinedKeyframes from './CombinedKeyframes';
import TimesKeyframes from './TimesKeyframes';
import EaseKeyframes from './EaseKeyframes';

export default function KeyframesCatalog() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <BasicMovement />
      <ScaleKeyframes />
      <RotateKeyframes />
      <OpacityKeyframes />
      <CombinedKeyframes />
      <TimesKeyframes />
      <EaseKeyframes />
    </div>
  );
}
