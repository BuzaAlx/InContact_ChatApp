import React, { useEffect } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Box } from "@material-ui/core/";
import { useAlertStyles } from "./styles";

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
