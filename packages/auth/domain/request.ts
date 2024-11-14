export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  full_name: string;
  email: string;
  password: string;
  confirm_password: string;
}
