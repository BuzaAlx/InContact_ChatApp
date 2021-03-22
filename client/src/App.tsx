import "./App.css";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import ApolloProvider from "./ApolloProvider";
import DynamicRoute from "./helpers/DynamicRoute";
import store from "./redux/createStore";

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

const App: React.FC = () => {
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
};

export default App;
