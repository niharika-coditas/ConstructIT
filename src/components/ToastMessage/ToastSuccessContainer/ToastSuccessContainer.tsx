import React from 'react';
import { Paragraph } from 'components/Paragraph/Paragraph';
import { IToastSuccessContainer } from './interfaces';
import style from './ToastSuccessContainer.module.scss';
import SuccessTickIcon from 'icons/SuccessTickIcon';
import CrossIcon from 'icons/CrossIcon';

export const ToastSuccessContainer: React.FC<IToastSuccessContainer> = ({
  message,
  closeToast
}) => {
  return (
    <div className={style.root}>
      <div className={style.messageContainer}>
        <SuccessTickIcon className={style.tickIcon} />
        <Paragraph type="XS" className={style.paragraph}>
          {message}
        </Paragraph>
      </div>
      <CrossIcon className={style.crossIcon} onClick={closeToast} />
    </div>
  );
};
