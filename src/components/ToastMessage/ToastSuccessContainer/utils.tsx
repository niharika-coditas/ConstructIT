import React from 'react';
import { toast } from 'react-toastify';
import { ToastSuccessContainer } from './ToastSuccessContainer';

export const toastSuccess = (message: string) => {
  toast.clearWaitingQueue();
  toast.dismiss();
  toast.success(({ closeToast }) => (
    <ToastSuccessContainer message={message} closeToast={closeToast} />
  ));
};
