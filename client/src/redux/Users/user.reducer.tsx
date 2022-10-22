import { userTypes } from "../../types/redux/User";
import { UsersState } from "../../types/redux/User";
import { UserActions } from "../../types/redux/User";

const INITIAL_STATE: UsersState = {
  users: [],
};

const usersReducer = (
  state = INITIAL_STATE,
  action: UserActions
): UsersState => {
  let usersCopy, userIndex;

  switch (action.type) {
    case userTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case userTypes.SET_USER_MESSAGES:
      const { username, messages } = action.payload;

      usersCopy = [...state.users];

      userIndex = usersCopy.findIndex((u) => u.username === username);

      usersCopy[userIndex] = { ...usersCopy[userIndex], messages };

      return {
        ...state,
        users: usersCopy,
      };

    case userTypes.SET_SELECTED_USER:
      usersCopy = [...state.users];

      usersCopy = usersCopy.map((user) => ({
        ...user,
        selected: user.username === action.payload,
      }));

      return {
        ...state,
        users: usersCopy,
      };

    case userTypes.ADD_MESSAGE:
      let { message } = action.payload;

      usersCopy = [...state.users];

      userIndex = usersCopy.findIndex(
        (u) => u.username === action.payload.username
      );

      message.reactions = [];
      const newUser = {
        ...usersCopy[userIndex],
        messages: usersCopy[userIndex].messages
          ? [message, ...usersCopy[userIndex].messages]
          : null,
        latestMessage: message,
      };

      usersCopy[userIndex] = newUser;

      return {
        ...state,
        users: usersCopy,
      };

    case userTypes.ADD_REACTION:
      let { reaction } = action.payload;
      usersCopy = [...state.users];

      userIndex = usersCopy.findIndex(
        (u) => u.username === action.payload.username
      );

      let userCopy = { ...usersCopy[userIndex] };

      let messageIndex = userCopy.messages.findIndex(
        (m: any) => m.uuid === reaction.message.uuid
      );

      if (messageIndex > -1) {
        let messagesCopy = [...userCopy.messages];

        let reactionsCopy = [...messagesCopy[messageIndex].reactions];

        let reactionIndex = reactionsCopy.findIndex(
          (r) => r.uuid === reaction.uuid
        );
        if (reactionIndex > -1) {
          reactionsCopy[reactionIndex] = reaction;
        } else {
          reactionsCopy = [...reactionsCopy, reaction];
        }

        messagesCopy[messageIndex] = {
          ...messagesCopy[messageIndex],
          reactions: reactionsCopy,
        };

        userCopy = { ...userCopy, messages: messagesCopy };
        usersCopy[userIndex] = userCopy;

        return {
          ...state,
          users: usersCopy,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default usersReducer;
