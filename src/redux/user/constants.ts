import { ROLE } from 'constants/constants';
import { IGetUser } from 'services/api/user/interfaces';

export const INITIAL_STATE: IGetUser = {
  userId: '',
  name: '',
  email: '',
  role: ROLE.PROJECT_MANAGER
};
