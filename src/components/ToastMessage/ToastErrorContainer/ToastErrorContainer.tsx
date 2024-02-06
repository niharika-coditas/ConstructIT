import React from 'react';
import { Paragraph } from 'components/Paragraph/Paragraph';
import { IToastErrorContainer } from './interfaces';
import style from './ToastErrorContainer.module.scss';
import CrossIcon from 'icons/CrossIcon';
import ErrorIcon from 'icons/ErrorIcon';

export const ToastErrorContainer: React.FC<IToastErrorContainer> = ({
  message,
  hideCrossIcon = false,
  closeToast
}) => {
  return (
    <div className={style.root}>
      <div className={style.messageContainer}>
        <ErrorIcon className={style.errorIcon} />
        <Paragraph type="XS" className={style.paragraph}>
          {message}
        </Paragraph>
      </div>
      {!hideCrossIcon && (
        <CrossIcon className={style.crossIcon} onClick={closeToast} />
      )}
    </div>
  );
};
