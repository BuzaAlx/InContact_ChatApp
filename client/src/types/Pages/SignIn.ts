export interface Login {
  username: string;
  email: string;
  createdAt: number;
  token: string;
}

export interface LoginData {
  login: Login;
}

export interface LoginVars {
  username: string;
  password: string;
}
