import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import { Grid, Container, Input, TextField, Button, FormControlLabel, Radio, item, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import loginBanner from '../assets/images/loginBanner.png';
import popupLogo from '../assets/images/popupLogo.png';
import appStore from '../assets/images/appStore.png';
import playStore from '../assets/images/playStore.png';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LoginHeader from '../sharedcomponent/LoginHeader';
import LoginFooter from '../sharedcomponent/LoginFooter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import moment from 'moment';

function Login(props) {

  // signup state
  const [uName, uNameSet] = useState("");
  const [uLname, uLnameSet] = useState("");
  const [uMobileno, uMobilenoSet] = useState("");
  const [uEmail, uEmailSet] = useState("");
  const [uPassword, uPasswordSet] = useState("");
  const [uConfirmPassword, uConfirmPasswordSet] = useState("");
  const [Udate, UdateSet] = useState("");
  const [uGender, uGenderSet] = useState("");
  const [signupData, signupDataSet] = useState([]);
  const [uEmailErr, uEmailErrSet] = useState("");
  const [uPasswordErr, uPasswordErrSet] = useState("");

  function clearSubmission() {
    uEmailErrSet("");
    uPasswordErrSet("");
  }

  let history = useHistory();

  function signIn() {
    clearSubmission();
    if (uEmail == undefined || uEmail == "") {
      uEmailErrSet("uEmail Is required");
    }
    if (uPassword == undefined || uPassword == "") {
      uPasswordErrSet("uPassword Is required");
    }
    else {
      if (uEmail == localStorage.getItem('uEmail') && uPassword == localStorage.getItem('uPassword')) {
        history.push('/');
      }
      else {
        alert("please enter valid credential and you can not login before sign up. please before login you have to sign up :( ");
      }
    }
    console.log(` ${uEmail} ${uPassword}`);
  }

  const [open, setOpen] = useState(false);
  const [conditionData, conditionDataSet] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const callingLogin = () => {
    setOpen(true);
    conditionDataSet(true);
  }

  const callingSignup = () => {
    setOpen(true);
    conditionDataSet(!true);
  }

  const handleDatePicker = (newValue) => {
    UdateSet(newValue);
  };


  function signUp() {
    const newRowData = ({
      id: signupData.length + 1,
      uName: uName,
      uLname: uLname,
      uMobileno: uMobileno,
      uEmail: uEmail,
      uPassword: uPassword,
      uConfirmPassword: uConfirmPassword,
      Udate: Udate,
      uGender: uGender,
    })
    const userDataTemp = [...signupData];
    userDataTemp.push(newRowData);
    signupDataSet(userDataTemp);
    localStorage.setItem("uEmail", uEmail);
    localStorage.setItem("uPassword", uPassword);
    console.log(userDataTemp);
  }

  useEffect(() => {
  }, [])

  return (
    <div>
      <LoginHeader
        callingLogin={callingLogin}
        callingSignup={callingSignup}
      />
      <div className='loginContainer'>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <img src={loginBanner} className="loginBannerImg" alt="" />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <p className='loginPara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
              <div className='storeBtnMain'>
                <a href="#_" className='storeBtn'><img src={appStore} alt="" /></a>
                <a href="#_" className='storeBtn'><img src={playStore} alt="" /></a>
              </div>
            </Grid>
          </Grid>
        </Container>

        <Dialog
          open={open}
          // fullWidth={true}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          {/* <DialogTitle id="alert-dialog-title"></DialogTitle> */}
          <DialogContent>
            {conditionData ?
              <div className='loginForm'>
                <img src={popupLogo} className="loginFormLogo" alt="" />
                <TextField
                  id="uEmail"
                  label="UEmail"
                  color="secondary"
                  variant="standard"
                  type="text"
                  placeholder="Enter Your UEmail"
                  fullWidth={true}
                  value={uEmail}
                  onChange={e => uEmailSet(e.target.value)}
                />
                <p className='error'>{uEmailErr}</p>
                <TextField
                  id="uPassword"
                  label="UPassword"
                  color="secondary"
                  variant="standard"
                  type="password"
                  placeholder="Enter Your uPassword"
                  fullWidth={true}
                  value={uPassword}
                  onChange={e => uPasswordSet(e.target.value)}
                />
                <p className='error'>{uPasswordErr}</p>
                <a href='#_' className='loginFormForgot'>Forget password</a>
                <Button fullWidth={true} variant="contained" color="secondary" type="submit" onClick={() => signIn()}>Login</Button>
                <p className='loginPara2'>OR YOU WANT TO LOGIN VIA</p>
                <div className='socialBtn'>
                  <a href='#_'><FacebookOutlinedIcon fontSize="large" /></a>
                  <a href='#_'><GoogleIcon fontSize="large" /></a>
                  <a href='#_'><TwitterIcon fontSize="large" /></a>
                </div>
              </div>
              :
              <div>
                <div className='loginForm'>
                  <img src={popupLogo} className="loginFormLogo" alt="" />
                  <Grid container spacing={3}>
                    <TextField
                      label="First Name"
                      color="secondary"
                      variant="standard"
                      type="text"
                      placeholder="Enter First Name"
                      fullWidth={true}
                      value={uName}
                      onChange={e => uNameSet(e.target.value)}
                    />
                    <TextField
                      label="Last Name"
                      color="secondary"
                      variant="standard"
                      type="text"
                      placeholder="Enter Last Name"
                      fullWidth={true}
                      value={uLname}
                      onChange={e => uLnameSet(e.target.value)}
                    />
                    <TextField
                      label="Mobile No"
                      color="secondary"
                      variant="standard"
                      type="text"
                      placeholder="Enter Mobile No"
                      fullWidth={true}
                      value={uMobileno}
                      onChange={e => uMobilenoSet(e.target.value)}
                    />
                    <TextField
                      label="Email"
                      color="secondary"
                      variant="standard"
                      type="text"
                      placeholder="Enter Email"
                      fullWidth={true}
                      value={uEmail}
                      onChange={e => uEmailSet(e.target.value)}
                    />
                    <TextField
                      label="Password"
                      color="secondary"
                      variant="standard"
                      type="password"
                      placeholder="Enter Password"
                      fullWidth={true}
                      value={uPassword}
                      onChange={e => uPasswordSet(e.target.value)}
                    />
                    <TextField
                      label="Confirm Password"
                      color="secondary"
                      variant="standard"
                      type="password"
                      placeholder="Enter Confirm Password"
                      fullWidth={true}
                      value={uConfirmPassword}
                      onChange={e => uConfirmPasswordSet(e.target.value)}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Select Date"
                        inputFormat="MM/dd/yyyy"
                        value={Udate}
                        onChange={handleDatePicker}
                        renderInput={(params) => <TextField
                          fullWidth
                          color="secondary"
                          variant="standard"
                          {...params} />}
                      />
                    </LocalizationProvider>
                    <FormControlLabel
                      value="Male"
                      control={<Radio size="small" checked={uGender === 'Male'} value="Male" onChange={() => uGenderSet('Male')} color="secondary" />}
                      label="Male"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="Female"
                      control={<Radio size="small" checked={uGender === 'Female'} value="Female" onChange={() => uGenderSet('Female')} color="secondary" />}
                      label="Female"
                      labelPlacement="end"
                    />
                    <Button fullWidth={true} variant="contained" color="secondary" onClick={() => signUp()} type="submit">Sign Up</Button>
                  </Grid>
                </div>
              </div>}
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>Agree</Button>
          </DialogActions> */}
        </Dialog>

      </div>
      <LoginFooter />
    </div>
  );
}

export default Login;
