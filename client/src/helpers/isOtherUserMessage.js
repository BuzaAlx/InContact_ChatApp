export const isOtherUserMessage = (m, user) => {
  if (m.from === user.displayName) {
    return false;
  } else if (m.to === user.displayName) {
    return true;
  }
};
