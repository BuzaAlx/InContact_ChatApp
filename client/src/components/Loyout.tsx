import React from "react";

import { Grid } from "@material-ui/core/";
import { useLoyoutStyles } from "./styles";

const Loyout: React.FC = ({ children }) => {
  const styles = useLoyoutStyles();
  return (
    <Grid container className={styles.root}>
      <Grid container item className={styles.container}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Loyout;
