import React from 'react';
import {Spacing} from '@ds.e/foundation'
import '@ds.e/scss/lib/Utilities.css';

interface ColorProps {
  hexCode: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color: React.FC<ColorProps> = ({ hexCode, width, height }) => {
  const className = `dse-width-${width} dse-height-${height}`;
  return (
    <div className={className} style={{ backgroundColor: hexCode }}>
      <h6> Color Component</h6>
    </div>
  );
};

export default Color;
