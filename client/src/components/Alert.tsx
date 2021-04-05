import React, { useEffect } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Box } from "@material-ui/core/";
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

function Alert({ message, setErrors, expiresIn }: any) {
  const styles = useAlertStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors("");
    }, expiresIn);

    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return (
    <Box className={styles.container}>
      <MuiAlert elevation={6} variant="filled" severity="warning">
        {message}
      </MuiAlert>
    </Box>
  );
}

export default Alert;
