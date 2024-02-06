import React from 'react';
import { SVGProps } from './interfaces';
import { ColorPalette } from 'constants/ColorPalette';

const OrderIcon: React.FC<SVGProps> = ({
  color = ColorPalette['primary-red'],
  ...props
}) => {
  return (
    <svg
      width={32}
      height={32}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      id="order"
      {...props}
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="30"
        d="m544.93 341.77 45.62 45.62 86.84-86.85M302.94 343.96h149.14"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="30"
        d="M770.24 343.96h150.2l-104.4 312.96H407.39L302.98 343.96l-43.56-130.57H103.56"
      ></path>
      <circle
        cx="480.59"
        cy="786.46"
        r="52.65"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="30"
      ></circle>
      <circle
        cx="742.84"
        cy="786.46"
        r="52.65"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="30"
      ></circle>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="30"
        d="M770.24 343.96c0 87.86-71.22 159.08-159.07 159.08-87.86 0-159.08-71.22-159.08-159.08 0-87.85 71.22-159.07 159.08-159.07 87.85 0 159.07 71.22 159.07 159.07z"
      ></path>
    </svg>
  );
};

export default OrderIcon;
