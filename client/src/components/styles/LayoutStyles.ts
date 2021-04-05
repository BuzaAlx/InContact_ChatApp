import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export const useLoyoutStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);
