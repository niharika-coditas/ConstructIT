import React from 'react';
import { Outlet } from 'react-router';

const UnAuthorizedHOC: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default UnAuthorizedHOC;
