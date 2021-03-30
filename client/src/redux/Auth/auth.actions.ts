import { loginInterface, logoutInterface } from "./../../types/Redux/Auth";
import { authTypes } from "../../types/Redux/Auth";
import { Login } from "../../types/Pages/SignIn";

export const login = (userCredentials: Login): loginInterface => ({
  type: authTypes.LOGIN,
  payload: userCredentials,
});

export const logout = (): logoutInterface => ({
  type: authTypes.LOGOUT,
});
