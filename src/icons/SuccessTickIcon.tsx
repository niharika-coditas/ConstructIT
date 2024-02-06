import React from 'react';
import { SVGProps } from './interfaces';
import { ColorPalette } from 'constants/ColorPalette';

const SuccessTickIcon: React.FC<SVGProps> = ({
  color = ColorPalette['primary-green'],
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M14 8C14 9.5913 13.3679 11.1174 12.2426 12.2426C11.1174 13.3679 9.5913 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C8.57 2 9.125 2.0825 9.65 2.2325L10.8275 1.055C9.9575 0.695 9.005 0.5 8 0.5C7.01509 0.5 6.03982 0.693993 5.12987 1.0709C4.21993 1.44781 3.39314 2.00026 2.6967 2.6967C1.29018 4.10322 0.5 6.01088 0.5 8C0.5 9.98912 1.29018 11.8968 2.6967 13.3033C3.39314 13.9997 4.21993 14.5522 5.12987 14.9291C6.03982 15.306 7.01509 15.5 8 15.5C9.98912 15.5 11.8968 14.7098 13.3033 13.3033C14.7098 11.8968 15.5 9.98912 15.5 8M4.9325 6.56L3.875 7.625L7.25 11L14.75 3.5L13.6925 2.435L7.25 8.8775L4.9325 6.56Z"
        fill={color}
      />
    </svg>
  );
};

export default SuccessTickIcon;
