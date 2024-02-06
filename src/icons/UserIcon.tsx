import React from 'react';
import { SVGProps } from './interfaces';
import { ColorPalette } from 'constants/ColorPalette';

const UserIcon: React.FC<SVGProps> = ({
  color = ColorPalette['primary-gray'],
  ...props
}) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.99999 0.333328C7.88405 0.333328 8.7319 0.684518 9.35702 1.30964C9.98214 1.93476 10.3333 2.78261 10.3333 3.66666C10.3333 4.55072 9.98214 5.39856 9.35702 6.02368C8.7319 6.64881 7.88405 6.99999 6.99999 6.99999C6.11594 6.99999 5.26809 6.64881 4.64297 6.02368C4.01785 5.39856 3.66666 4.55072 3.66666 3.66666C3.66666 2.78261 4.01785 1.93476 4.64297 1.30964C5.26809 0.684518 6.11594 0.333328 6.99999 0.333328ZM6.99999 1.99999C6.55797 1.99999 6.13404 2.17559 5.82148 2.48815C5.50892 2.80071 5.33333 3.22463 5.33333 3.66666C5.33333 4.10869 5.50892 4.53261 5.82148 4.84517C6.13404 5.15773 6.55797 5.33333 6.99999 5.33333C7.44202 5.33333 7.86594 5.15773 8.17851 4.84517C8.49107 4.53261 8.66666 4.10869 8.66666 3.66666C8.66666 3.22463 8.49107 2.80071 8.17851 2.48815C7.86594 2.17559 7.44202 1.99999 6.99999 1.99999ZM6.99999 7.83333C9.22499 7.83333 13.6667 8.94166 13.6667 11.1667V13.6667H0.333328V11.1667C0.333328 8.94166 4.77499 7.83333 6.99999 7.83333ZM6.99999 9.41666C4.52499 9.41666 1.91666 10.6333 1.91666 11.1667V12.0833H12.0833V11.1667C12.0833 10.6333 9.47499 9.41666 6.99999 9.41666Z"
        fill={color}
      />
    </svg>
  );
};

export default UserIcon;
