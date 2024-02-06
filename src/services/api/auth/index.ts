import axiosClient from 'services/HttpClient';
import {
  ICredentials,
  IRegistration,
  LoginResponse,
  RegistrationResponse
} from './interfaces';
import { ENDPOINT } from './constants';

export const login = async (
  credentials: ICredentials
): Promise<LoginResponse> => {
  const response = await axiosClient.post(
    `${ENDPOINT.auth}/login`,
    credentials
  );
  const result = response.data.data;
  return result;
};

export const register = async (
  data: IRegistration
): Promise<RegistrationResponse> => {
  const response = await axiosClient.post(`/register`, data);
  const result = response.data.data;
  return result;
};
