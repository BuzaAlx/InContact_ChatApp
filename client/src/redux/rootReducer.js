import { combineReducers } from "redux";
import authReducer from "./Auth/auth.reducer";
import usersReducer from "./Users/user.reducer";

export default combineReducers({
  authData: authReducer,
  usersData: usersReducer,
});
