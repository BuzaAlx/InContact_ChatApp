import userTypes from "./users.types";

export const setUsers = (users) => ({
  type: userTypes.SET_USERS,
  payload: users,
});

export const setUserMessages = (payload) => ({
  type: userTypes.SET_USER_MESSAGES,
  payload: payload,
});

export const setSelectedUser = (payload) => ({
  type: userTypes.SET_SELECTED_USER,
  payload: payload,
});

export const addMessage = (payload) => ({
  type: userTypes.ADD_MESSAGE,
  payload: payload,
});

export const addReaction = (payload) => ({
  type: userTypes.ADD_REACTION,
  payload: payload,
});
