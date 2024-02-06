import React from 'react';
import { Paragraph } from 'components/Paragraph/Paragraph';
import { IToastWarningContainer } from './interfaces';
import style from './ToastWarningContainer.module.scss';
import CrossIcon from 'icons/CrossIcon';
import WarningIcon from 'icons/WarningIcon';

export const ToastWarningContainer: React.FC<IToastWarningContainer> = ({
  message,
  closeToast
}) => {
  return (
    <div className={style.root}>
      <div className={style.messageContainer}>
        <WarningIcon className={style.warningIcon} />
        <Paragraph type="XS" className={style.paragraph}>
          {message}
        </Paragraph>
      </div>
      <CrossIcon className={style.crossIcon} onClick={closeToast} />
    </div>
  );
};
