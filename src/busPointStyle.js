import React, {PureComponent} from 'react';

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none'
};

export default class busPinStyle extends PureComponent {

  render() {
    const {size = 20, onClick} = this.props;

    return (
      <svg height={size} viewBox='0 0 24 24'
        style={{...pinStyle, transform: `translate(${-size/2}px,${-size}px)`}}
        onClick={onClick} >
      </svg>
    );
  }
}

// export function pointOnCircle({center, angle, radius}) {
//   return {
//     type: 'Point',
//     coordinates: [
//       center[0] + Math.cos(angle) * radius,
//       center[1] + Math.sin(angle) * radius
//     ]
//   };
// }