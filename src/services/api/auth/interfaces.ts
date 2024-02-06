export interface ICredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  userId: string;
  roleId: string;
  token: string;
}

export interface IRegistration {
  name: string;
  email: string;
  password: string;
  roleId: string;
}

export interface RegistrationResponse {
  statusCode: number;
  message: string;
}
