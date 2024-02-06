import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './ToastContainerWrapper.module.scss';

export const ToastContainerWrapper: React.FC = () => {
  return (
    <ToastContainer
      limit={2}
      hideProgressBar
      position="top-center"
      icon={false}
      closeButton={false}
      toastClassName={style.toast}
      bodyClassName={style.toastBody}
      closeOnClick={false}
    />
  );
};
