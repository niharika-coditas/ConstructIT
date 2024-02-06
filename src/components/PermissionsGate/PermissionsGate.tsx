import usePermissionCheck from 'hooks/usePermissionCheck';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { IPermissionsGate } from './interfaces';

const PermissionsGate: React.FC<IPermissionsGate> = ({
  permissions = [],
  checkUnauthorized = false,
  children
}) => {
  const permissionCheck = usePermissionCheck();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (checkUnauthorized && !permissionCheck(permissions))
      navigate('/unauthorized');
  }, [location]);

  if (permissionCheck(permissions)) return <>{children}</>;

  return <></>;
};

export default PermissionsGate;
