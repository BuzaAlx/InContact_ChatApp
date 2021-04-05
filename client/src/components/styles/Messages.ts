import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export const useMessagesStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    main: {
      flexGrow: 1,
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
  })
);
