import React, { ComponentType } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../types";

const mapState = (state: RootState) => ({
  user: state.authData.user,
});

interface Props {
  exact?: boolean;
  authenticated?: boolean;
  guest?: boolean;
  path: string;
  currentComponent: ComponentType<any>;
}

const DynamicRoute: React.FC<Props> = (props) => {
  const { user } = useSelector(mapState);

  if (props.authenticated && !user) {
    return <Redirect to="/login" />;
  } else if (props.guest && user) {
    return <Redirect to="/" />;
  } else {
    return <Route component={props.currentComponent} {...props} />;
  }
};

export default DynamicRoute;
