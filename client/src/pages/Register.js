import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import Loyout from "../components/Loyout";
import { useRegisterStyles } from "./styles";

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      username
      email
      createdAt
    }
  }
`;

function Register(props) {
  const classes = useRegisterStyles();
  const [variables, setVariables] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const [registerUser] = useMutation(REGISTER_USER, {
    update: (_, __) => props.history.push("/login"),
    onError: (err) => setErrors(err.graphQLErrors[0].extensions.errors),
  });

  const submitRegisterForm = (e) => {
    e.preventDefault();

    registerUser({ variables });
  };

  return (
    <Loyout>
      <Grid xs={11} md={8} className={classes.root}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={submitRegisterForm}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={variables.email}
                    onChange={(e) =>
                      setVariables({ ...variables, email: e.target.value })
                    }
                    error={errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="username"
                    label="Username"
                    id="username"
                    value={variables.username}
                    onChange={(e) =>
                      setVariables({ ...variables, username: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="password"
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    type="password"
                    label="Password"
                    autoFocus
                    value={variables.password}
                    onChange={(e) =>
                      setVariables({ ...variables, password: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="ConfirmPassword"
                    label="Confirm Password"
                    type="password"
                    name="ConfirmPassword"
                    value={variables.confirmPassword}
                    onChange={(e) =>
                      setVariables({
                        ...variables,
                        confirmPassword: e.target.value,
                      })
                    }
                    error={errors.confirmPassword}
                    helperText={errors.confirmPassword}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="center">
                <Grid item>
                  <Link to="./login" variant="body2" color="white">
                    <Typography variant="overline" color="textSecondary">
                      Already have an account? Sign in
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
              InContact Messenger
            </Typography>
            <Typography>be in contact with important people for you</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Loyout>
  );
}

export default Register;
