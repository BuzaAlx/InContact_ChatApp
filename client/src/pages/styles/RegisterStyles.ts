import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export const useRegisterStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      background:
        "linear-gradient(90deg, rgba(2,0,36,1) 20%, rgba(121,9,117,0.40379901960784315) 50%, rgba(0,212,255,0.2) 90%);",
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },
    textBlock: {
      position: "relative",
      zIndex: 10,
      MaxWidth: "400px",
      padding: "10px",
      alignSelf: "center",
      marginLeft: "15px",
      marginTop: "80px",
    },
    title: {
      fontFamily: "'Space Grotesk', sans-serif;",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    rightColumn: {
      background: "url('./happyf.jpg') no-repeat center ;",
      backgroundSize: " cover;",
      position: "relative",
      "&::after": {
        position: "absolute",
        content: "''",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        background:
          "linear-gradient(0deg, rgba(34,89,195,0.4) 0%, rgba(16,222,255,0.4) 100%);",
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  })
);
