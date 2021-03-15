import "./App.css";
import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Register from "./pages/Register";
import { deepPurple } from "@material-ui/core/colors";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ApolloProvider from "./ApolloProvider";

import DynamicRoute from "./helpers/DynamicRoute";

import store from "./redux/createStore";
import { Provider } from "react-redux";

const darkTheme = createMuiTheme({
  typography: {
    fontFamily: "'Space Grotesk', sans-serif;",
  },
  palette: {
    type: "dark",
    primary: {
      main: deepPurple[400],
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider>
        <BrowserRouter>
          <ThemeProvider theme={darkTheme}>
            <div className="App">
              <Switch>
                <DynamicRoute exact path="/" component={Home} authenticated />
                <DynamicRoute path="/register" component={Register} guest />
                <DynamicRoute path="/login" component={SignIn} guest />
              </Switch>
            </div>
          </ThemeProvider>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
