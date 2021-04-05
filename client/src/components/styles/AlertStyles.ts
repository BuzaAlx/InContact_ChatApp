import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export const useAlertStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "absolute",
      zIndex: 100,
      bottom: 60,
    },
  })
);
