import { ROLE } from 'constants/constants';

export interface IGetUser {
  userId: string;
  name: string;
  email: string;
  role: ROLE;
}
