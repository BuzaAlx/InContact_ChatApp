import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export const useHomeStyles = makeStyles((theme: Theme) =>
  createStyles({
    rightBlock: {},
    content: {
      position: "relative",
      zIndex: 2,
      borderRadius: "20px",
      justifyContent: "space-around",
      background:
        "linear-gradient(90deg, rgba(2,0,36,1) 20%, rgba(121,9,117,0.40379901960784315) 50%, rgba(0,212,255,0.2) 90%);",
      [theme.breakpoints.down("xs")]: {
        // height: "100vh",
      },
    },
  })
);
