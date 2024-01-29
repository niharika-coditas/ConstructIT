import React from 'react';
import { ISpinner } from './interfaces';
import style from './Spinner.module.scss';

export const Spinner: React.FC<ISpinner> = ({
  size = 'Default',
  color = 'Light',
  ...props
}) => {
  return (
    <div
      className={`${style.loader} ${style[`size${size}`]} ${
        style[`color${color}`]
      }`}
      {...props}
    ></div>
  );
};
