import React from 'react';
import { toast } from 'react-toastify';
import { ToastErrorContainer } from './ToastErrorContainer';

export const toastError = (message: string) => {
  toast.clearWaitingQueue();
  toast.dismiss();
  toast.error(({ closeToast }) => (
    <ToastErrorContainer message={message} closeToast={closeToast} />
  ));
};
