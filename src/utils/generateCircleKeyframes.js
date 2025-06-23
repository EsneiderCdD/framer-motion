// src/utils/generateCircleKeyframes.js

export function generateCircleKeyframes(steps = 20, radius = 100) {
  const xKeyframes = [];
  const yKeyframes = [];

  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * 2 * Math.PI; // Distribuye los puntos en 360°
    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);
    xKeyframes.push(x);
    yKeyframes.push(y);
  }

  return { x: xKeyframes, y: yKeyframes };
}
