import { AuthActions } from "../../types/Redux/Auth";
import { authTypes } from "../../types/Redux/Auth";
import jwtDecode from "jwt-decode";

interface MyToken {
  name: string;
  exp: number;
}

let user = null;
const token = localStorage.getItem("token");
if (token) {
  const decodedToken = jwtDecode<MyToken>(token);
  const expiresAt = new Date(decodedToken.exp * 1000);

  if (new Date() > expiresAt) {
    localStorage.removeItem("token");
  } else {
    user = decodedToken;
  }
} else console.log("No token found");

const INITIAL_STATE = {
  user,
};

const authReducer = (state = INITIAL_STATE, action: AuthActions) => {
  switch (action.type) {
    case authTypes.LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload,
      };
    case authTypes.LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
