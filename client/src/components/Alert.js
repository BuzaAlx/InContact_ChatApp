import React, { useEffect } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

export const useAlertStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    zIndex: "100",
    bottom: 60,
  },
}));

function Alert({ message, setErrors, expiresIn }) {
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
