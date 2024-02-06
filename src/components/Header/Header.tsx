import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Paragraph } from 'components/Paragraph/Paragraph';
import { useAppSelector } from 'hooks/reduxHooks';
import UserIcon from 'icons/UserIcon';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';

const Header: React.FC = () => {
  const user = useAppSelector(state => state.user);

  const [header, setHeader] = useState('Dashboard');

  useEffect(() => {
    const header = window.location.pathname.substring(1);
    setHeader(capitalizeFirstLetter(header));
  }, [window.location.pathname]);

  return (
    <div className={styles.headerWrapper}>
      <Paragraph bold className={styles.header}>
        {header}
      </Paragraph>
      <div className={styles.profileWrapper}>
        <div className={styles.pictureWrapper}>
          <UserIcon />
        </div>
        <Paragraph>{user.name}</Paragraph>
      </div>
    </div>
  );
};

export default Header;
