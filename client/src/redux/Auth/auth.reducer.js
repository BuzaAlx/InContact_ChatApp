import authTypes from "./auth.types";
import jwtDecode from "jwt-decode";

let user = null;
const token = localStorage.getItem("token");
if (token) {
  const decodedToken = jwtDecode(token);
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

const authReducer = (state = INITIAL_STATE, action) => {
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
