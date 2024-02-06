import axiosClient from 'services/HttpClient';
import ENDPOINT from './constants';
import { IGetUser } from './interfaces';

export const getUserById = async (id: string): Promise<IGetUser> => {
  const response = await axiosClient.get(`${ENDPOINT.user}/${id}`);
  return response?.data?.data;
};
