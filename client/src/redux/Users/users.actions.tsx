import { userTypes } from "../../types/Redux/User";
import {
  setUsersInterface,
  setUserMessagesInterface,
  addMessageInterface,
  addReactionInterface,
  setSelectedUserInterface,
} from "../../types/Redux/User";
import {
  setUserMessagesPayload,
  addMessagePayload,
  addReactionPayload,
} from "../../types/Redux/User";

export const setUsers = (users: any): setUsersInterface => ({
  type: userTypes.SET_USERS,
  payload: users,
});

export const setUserMessages = (
  payload: setUserMessagesPayload
): setUserMessagesInterface => ({
  type: userTypes.SET_USER_MESSAGES,
  payload: payload,
});

export const setSelectedUser = (payload: string): setSelectedUserInterface => ({
  type: userTypes.SET_SELECTED_USER,
  payload: payload,
});

export const addMessage = (
  payload: addMessagePayload
): addMessageInterface => ({
  type: userTypes.ADD_MESSAGE,
  payload: payload,
});

export const addReaction = (
  payload: addReactionPayload
): addReactionInterface => ({
  type: userTypes.ADD_REACTION,
  payload: payload,
});
