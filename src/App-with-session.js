import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  BrowserRouter,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import '../src/assets/dependencies.jsx';
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Login from './pagecomponent/Login';
import Dashboard from './pagecomponent/Dashboard';
import NoMatch from './pagecomponent/NoMatch';

function App() {

  const [session] = useState(true);

  const AuthorizedLanding = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      !!session ?
        <Component {...props} /> : <Redirect to={{ pathname: '/Login', state: { from: props.location.pathname } }} />
    )} />
  )

  const NonAuthorizedLanding = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      !session ?
        <Component {...props} /> : <Redirect to={{ pathname: '/' }} />
    )} />
  )

  return (
    <div>
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <Switch>
            <NonAuthorizedLanding path={'/Login'} component={Login} />
            <AuthorizedLanding path={'/'} component={Dashboard} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
