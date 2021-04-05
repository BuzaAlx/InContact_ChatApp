import { Message, Reaction } from "../Pages/Home";
import { User } from "../components/UsersList";

export enum userTypes {
  SET_USERS = "SET_USERS",
  SET_USER_MESSAGES = "SET_USER_MESSAGES",
  SET_SELECTED_USER = "SET_SELECTED_USER",
  ADD_MESSAGE = "ADD_MESSAGE",
  ADD_REACTION = "ADD_REACTION",
}

// export interface User {
//   users: any;
// }

export interface UsersState {
  users: User[] | any;
}

export interface setUserMessagesPayload {
  username: string | undefined;
  messages: any[];
}
export interface addMessagePayload {
  username: string;
  message: Message;
}
export interface addReactionPayload {
  username: string;
  reaction: Reaction;
}

export interface setUsersInterface {
  type: userTypes.SET_USERS;
  payload: UsersState;
}

export interface setUserMessagesInterface {
  type: userTypes.SET_USER_MESSAGES;
  payload: setUserMessagesPayload;
}

export interface setSelectedUserInterface {
  type: userTypes.SET_SELECTED_USER;
  payload: string;
}

export interface addMessageInterface {
  type: userTypes.ADD_MESSAGE;
  payload: addMessagePayload;
}

export interface addReactionInterface {
  type: userTypes.ADD_REACTION;
  payload: addReactionPayload;
}

export type UserActions =
  | setUsersInterface
  | setUserMessagesInterface
  | setSelectedUserInterface
  | addMessageInterface
  | addReactionInterface;
