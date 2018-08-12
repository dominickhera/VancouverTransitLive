export function pointOnCircle({center, angle, radius}) {
  return {
    type: 'Point',
    coordinates: [
      49.260900,
      -123.113900,
      // center[0] + Math.cos(angle) * radius,
      // center[1] + Math.sin(angle) * radius
    ]
  };
}