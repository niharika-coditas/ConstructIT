import React from 'react';
import { SVGProps } from './interfaces';
import { ColorPalette } from 'constants/ColorPalette';

const WarningIcon: React.FC<SVGProps> = ({
  color = ColorPalette['primary-yellow'],
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      {...props}
    >
      <path
        d="M8 0.333344L0.666664 13H15.3333M8 3.00001L13.02 11.6667H2.98M7.33333 5.66668V8.33334H8.66666V5.66668M7.33333 9.66668V11H8.66666V9.66668"
        fill={color}
      />
    </svg>
  );
};

export default WarningIcon;
