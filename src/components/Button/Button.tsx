import React from 'react';
import { IButton } from './interfaces';
import style from './Button.module.scss';
import { Spinner } from 'components/Spinner/Spinner';

export const Button: React.FC<IButton> = ({
  buttonType = 'Primary',
  fullWidth,
  loading,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${style.buttonMain} ${style[`buttonType${buttonType}`]} ${
        fullWidth ? style.fullWidth : ''
      } ${props?.className} `}
    >
      {loading && (
        <div className={style.spinnerWrapper}>
          <Spinner
            size="S"
            style={{
              ...(buttonType !== 'Primary'
                ? { border: '3px solid #8888884d', borderTopColor: '#555' }
                : {})
            }}
          />
        </div>
      )}
      {props.children}
    </button>
  );
};
