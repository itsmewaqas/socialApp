import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

function NoMatch(props) {

  let location = useLocation();

  return (
    <div>
      <p>No match for {location.pathname}</p>
    </div>
  );
}

export default NoMatch;
























