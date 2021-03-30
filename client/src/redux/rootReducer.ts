import { combineReducers } from "redux";
import authReducer from "./Auth/auth.reducer";
import usersReducer from "./Users/user.reducer";

const rootReducer = combineReducers({
  authData: authReducer,
  usersData: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
