import React from 'react';
import { SVGProps } from './interfaces';

const CrossIcon: React.FC<SVGProps> = ({ color = '#000', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill={color}
      {...props}
    >
      <path d="M9.66634 1.27334L8.72634 0.333344L4.99967 4.06001L1.27301 0.333344L0.333008 1.27334L4.05967 5.00001L0.333008 8.72668L1.27301 9.66668L4.99967 5.94001L8.72634 9.66668L9.66634 8.72668L5.93967 5.00001L9.66634 1.27334Z" />
    </svg>
  );
};

export default CrossIcon;
