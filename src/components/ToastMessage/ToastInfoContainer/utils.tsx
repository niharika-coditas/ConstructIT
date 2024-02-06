import React from 'react';
import { toast } from 'react-toastify';
import { ToastInfoContainer } from './ToastInfoContainer';

export const toastInfo = (message: string) => {
  toast.clearWaitingQueue();
  toast.dismiss();
  toast.info(({ closeToast }) => (
    <ToastInfoContainer message={message} closeToast={closeToast} />
  ));
};
