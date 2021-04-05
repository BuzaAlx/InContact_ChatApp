import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export const useUsersListStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);
