import authTypes from "./auth.types";

export const login = (userCredentials) => ({
  type: authTypes.LOGIN,
  payload: userCredentials,
});

export const logout = () => ({
  type: authTypes.LOGOUT,
});
