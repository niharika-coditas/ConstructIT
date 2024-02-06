import React, { useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import { getUserById } from 'services/api/user';
import { useAppDispatch } from 'hooks/reduxHooks';
import { setUser } from 'redux/user';
import { Outlet } from 'react-router';
import styles from './AuthorizedHOC.module.scss';
import { toastError } from 'components/ToastMessage';
import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/Header/Header';

const AuthorizedHOC: React.FC = () => {
  const dispatch = useAppDispatch();
  const { execute: userExecute } = useFetch(getUserById, {
    onSuccess(data) {
      dispatch(
        setUser({
          userId: data.userId,
          name: data.name,
          email: data.email,
          role: data.role
        })
      );
    },
    onError(error) {
      toastError('Something went wrong!!');
    }
  });

  useEffect(() => {
    const userId = window.localStorage.getItem('userId');
    if (userId) {
      userExecute(userId);
    }
  }, []);
  return (
    <div className={styles.outletWrapper}>
      <Sidebar />
      <div className={styles.outletSubWrapper}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthorizedHOC;
