import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export const useMessageStyles = makeStyles((theme: Theme) =>
  createStyles({
    messageText: {
      padding: "10px",
      borderRadius: "15px",
      backgroundColor: "rgba(201,247,111, 0.8)",
      fontFamily: "'Work Sans', sans-serif;",
      fontWeight: 200,
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
  })
);
