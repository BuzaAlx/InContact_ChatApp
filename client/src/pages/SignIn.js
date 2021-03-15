import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { gql, useLazyQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Loyout from "../components/Loyout";
import { useSignInStyles } from "./styles";
import { useDispatch } from "react-redux";
import { login } from "../redux/Auth/auth.actions";

// import { useAuthDispatch } from "../context/auth";

const LOGIN_USER = gql`
  query login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      email
      createdAt
      token
    }
  }
`;

function SignIn() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [variables, setVariables] = useState({
    username: "",
    password: "",
  });

  const classes = useSignInStyles();
  // const dispatch = useAuthDispatch();

  const [loginUser, { loading }] = useLazyQuery(LOGIN_USER, {
    onError: (err) => setErrors(err.graphQLErrors[0].extensions.errors),

    onCompleted(data) {
      dispatch(login(data.login));
      window.location.href = "/";
    },
  });

  const submitLoginForm = (e) => {
    e.preventDefault();
    loginUser({ variables });
  };

  return (
    <Loyout>
      <Grid xs={10} className={classes.root}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={submitLoginForm}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Username"
                    name="Username"
                    value={variables.username}
                    onChange={(e) =>
                      setVariables({ ...variables, username: e.target.value })
                    }
                    error={!!errors.username}
                    helperText={errors.username && errors.username}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={variables.password}
                    onChange={(e) =>
                      setVariables({ ...variables, password: e.target.value })
                    }
                    error={!!errors.password}
                    helperText={errors.password && errors.password}
                  />
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={loading}
              >
                {loading ? "loading.." : "Sign In"}
              </Button>
              <Grid container justify="center">
                <Grid item>
                  <Link to="./register" variant="body2" color="white">
                    <Typography variant="overline" color="textSecondary">
                      Don't have an account? Sign Up
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
        <Grid container item xs={6} className={classes.rightColumn}>
          <Grid item className={classes.textBlock}>
            <Typography variant="h4" className={classes.title}>
              Let's Talk Messenger
            </Typography>
            <Typography variant="subtitle2">
              be in contact with important people for you
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Loyout>
  );
}

export default SignIn;
