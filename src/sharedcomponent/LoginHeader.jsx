import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import loginLogo from '../assets/images/logo.png';

function LoginHeader(props) {

  const callLogin = () => {
    props.callingLogin();
  }

  const callSignup = () => {
    props.callingSignup();
  }

  return (
    <div>
      <div className="loginHeader clearfix">
        <img className='loginLogo' src={loginLogo} alt="" />
        <ul>
          <li><a onClick={() => callSignup()}>Signup</a></li>
          <li><a onClick={() => callLogin()}>Login</a></li>
        </ul>
      </div>
    </div>
  );
}

export default LoginHeader;