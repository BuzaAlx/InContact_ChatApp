import { Login } from "../Pages/SignIn";

export enum authTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export interface loginInterface {
  type: authTypes.LOGIN;
  payload: Login;
}

export interface logoutInterface {
  type: authTypes.LOGOUT;
  payload?: any;
}

export type AuthActions = loginInterface | logoutInterface;
