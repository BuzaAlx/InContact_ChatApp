import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const mapState = (state) => ({
  user: state.authData.user,
});

export default function DynamicRoute(props) {
  const { user } = useSelector(mapState);

  console.log(user);

  if (props.authenticated && !user) {
    return <Redirect to="/login" />;
  } else if (props.guest && user) {
    return <Redirect to="/" />;
  } else {
    return <Route component={props.component} {...props} />;
  }
}
