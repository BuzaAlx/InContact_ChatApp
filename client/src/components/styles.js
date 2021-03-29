import { makeStyles } from "@material-ui/core/styles";

export const useLoyoutStyles = makeStyles({
  root: {
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(121,9,117,0.40379901960784315) 85%);",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "100vh",
    padding: "0",
    margin: 0,
    justifyContent: "center",
  },
  container: {
    alignItems: "center",

    alignSelf: "center",
    flexDirection: "column",
  },
  leftBlock: {
    backgroundColor: "rgba(2,0,36,0.4);",
  },
  rightBlock: {},
  header: {
    minHeight: "50px",
    backgroundColor: "rgba(217, 20, 20, 0.4)",
  },
});

export const useMessageStyles = makeStyles((theme) => ({
  messageText: {
    padding: "10px",
    borderRadius: "15px",
    backgroundColor: "rgba(201,247,111, 0.8)",
    fontFamily: "'Work Sans', sans-serif;",
    fontWeight: "200",
    wordWrap: "break-word",
    maxWidth: "300px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "200px",
    },
  },
  selfMessageText: {
    backgroundColor: "rgba(92,204,204, 0.8);",
  },
  emoji: {
    fontFamily: "'Work Sans', sans-serif;",
    position: "absolute",
    top: "7px",
    right: "-10px",
    backgroundColor: "rgba(2,0,36,0.4);",
    color: theme.palette.text.primary,
    borderRadius: "20px",
    padding: " 0 6px 0",
    fontSize: "0.8rem",
  },
  emojiRight: {
    position: "absolute",
    top: "10px",
    left: "-10px",
    backgroundColor: "rgba(2,0,36,0.4);",
    color: theme.palette.text.primary,
    borderRadius: "20px",
    padding: " 0 2px 0",
    fontSize: "0.8rem",
  },
  reactionsBox: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "100px",
    padding: "5px",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "rgb(255, 228, 196);",
    // height: "200px",
  },
  messageBox: {
    paddingTop: "15px",
    position: "relative",
  },
  reaction: {
    transition: "all .2s ease",
    "&:hover": {
      transform: "scale(1.2);",
    },
  },
}));

export const useMessagesStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  header: {
    // height: "50px",
  },
  main: {
    flexGrow: "1",
    flexDirection: "column-reverse",
    height: "430px",
    overflowY: "scroll",
    paddingLeft: "10px",
    paddingRight: "10px",

    [theme.breakpoints.down("sm")]: {
      // maxHeight: "630px",
    },

    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      visibility: "hidden;",
      background: "linear-gradient(#e66465, #9198e5);",
    },
    "&:hover::-webkit-scrollbar-thumb": {
      visibility: "visible;",
      transition: "all 0.2s ease;",
    },
  },
  messagesHeader: {
    position: "relative",
  },
  logoutButton: {
    position: "absolute",
    right: "10px",
    color: "rgba(2,0,36,0.4);",
  },

  footer: {
    height: "50px",
    margin: "5px",
    borderRadius: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.5);",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    color: "black",
    width: "80%",
    height: "100%",
    marginLeft: "10px",
  },
  button: {
    color: "rgba(2,0,36,0.4);",
    marginRight: "5px",
  },
  messageBox: {
    padding: "10px",
    borderRadius: "15px",
    backgroundColor: "rgba(28, 21, 235, 0.2);",
    marginBottom: "10px",
  },
}));

export const useUsersListStyles = makeStyles((theme) => ({
  userInfo: {
    maxWidth: "120px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  usersMarkup: {
    padding: 10,
  },
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "80vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  latestMessageTimeBox: {
    alignSelf: "flex-start",
    textAlign: "end",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  onlineIcon: {
    width: "12px",
    height: "12px",
    right: "12px",
    background:
      "linear-gradient(0deg, rgba(59,195,34,1) 0%, rgba(45,178,253,1) 100%);",
    position: "absolute",
    borderRadius: "50%",
  },
  avatar: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  searchUserInput: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    padding: "10px",
  },
  authUser: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  authUserContainer: {
    display: "flex",
    justifyContent: "center",
  },
  lastMessage: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  listItem: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
  usersList: {
    height: "400px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      visibility: "hidden;",
      backgroundСolor: "rgba(73, 43, 107, 0.952);",
    },
    "&:hover::-webkit-scrollbar-thumb": {
      visibility: "visible;",
      transition: "all 0.2s ease;",
    },
  },
}));
