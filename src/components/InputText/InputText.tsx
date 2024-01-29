import React, { forwardRef } from 'react';
import { IInputText } from './interfaces';
import style from './InputText.module.scss';

export const InputText = forwardRef<HTMLInputElement, IInputText>(
  ({ fullWidth, SVGIcon, disabled, error, ...props }, ref) => {
    if (SVGIcon)
      return (
        <div
          className={`${style.inputWrapper} ${
            fullWidth ? style.fullWidth : ''
          } ${disabled ? style.disabled : ''} ${
            error ? style.errorContainer : ''
          } `}
        >
          <div className={style.iconWrapper}>{SVGIcon}</div>
          <input
            {...props}
            className={`${style.inputContainer} ${
              fullWidth ? style.fullWidth : ''
            } ${props?.className}`}
            ref={ref}
            disabled={disabled}
          />
        </div>
      );

    return (
      <input
        {...props}
        className={`${style.inputContainerMain} 
        ${fullWidth ? style.fullWidth : ''} 
        ${error ? style.errorContainer : ''}
        ${props?.className}`}
        ref={ref}
        disabled={disabled}
      />
    );
  }
);
