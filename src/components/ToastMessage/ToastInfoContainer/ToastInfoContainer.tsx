import React from 'react';
import { Paragraph } from 'components/Paragraph/Paragraph';
import { IToastInfoContainer } from './interfaces';
import style from './ToastInfoContainer.module.scss';
import CrossIcon from 'icons/CrossIcon';
import InfoBlueIcon from 'icons/InfoBlueIcon';

export const ToastInfoContainer: React.FC<IToastInfoContainer> = ({
  message,
  hideCrossIcon,
  closeToast
}) => {
  return (
    <div className={style.root}>
      <div className={style.messageContainer}>
        <InfoBlueIcon className={style.warningIcon} />
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
