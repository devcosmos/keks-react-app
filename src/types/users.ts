export type UserData = {
  name: number;
  email: string;
  avatarUrl: string;
  token: string;
};

export type AuthData = {
  email: string;
  password: string;
};

export type RegistrationData = {
  name: string;
  email: string;
  password: string;
};

type SignFieldData = {
  value: string;
  error: string;
  valid: string;
  message: string;
  regex: RegExp;
}

export type SignFormData = {
  [key: string]: SignFieldData;
}
