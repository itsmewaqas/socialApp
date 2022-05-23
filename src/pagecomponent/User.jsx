import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
  useRouteMatch,
  Redirect,
  withRouter
} from "react-router-dom";
import Profile from '../pagecomponent/Profile';
import About from '../pagecomponent/About';
import Friends from '../pagecomponent/Friends';
import Albums from '../pagecomponent/Albums';
import coverImg from '../assets/images/postimg4.jpg';
import dpImg from '../assets/images/user.jpg';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

function User(props) {

  const [activeMenu, activeMenuSet] = useState('Profile');

  // let { path } = useRouteMatch();
  let { path, url } = useRouteMatch();
  let match = useRouteMatch();
  let history = useHistory();

  const fileReader = new FileReader();

  const [coverImage, coverImageSet] = useState(coverImg);
  const coverImageUpload = e => {
    const pickedFile1 = (e.target.files[0]);
    fileReader.onload = () => coverImageSet(fileReader.result);
    fileReader.readAsDataURL(pickedFile1);
  };

  const [dpImage, dpImageSet] = useState(dpImg);
  const dpImageUpload = e => {
    const pickedFile2 = (e.target.files[0]);
    fileReader.onload = () => dpImageSet(fileReader.result);
    fileReader.readAsDataURL(pickedFile2);
  };

  useEffect(() => {
  }, []);

  return (
    <div>
      <Router>
        <div className='whiteTopWrapper clearfix'>
          <Container>
            <div className='coverImageContainer'>
              <img className='coverImage' src={coverImage} alt='' />
            </div>
            <div class="uploadCoverPhoto">
              <button class="coverBtn"><CreateOutlinedIcon fontSize='small' color='secondary' />
                Edit Cover Photo</button>
              <input type="file" name="myfile2" onChange={coverImageUpload} />
            </div>
            <div className='profileDpBox'>
              <img src={dpImage} alt='' />
              <p>Waqas</p>
              <div class="dpUploadBtn">
                <button class="dpButton">
                  <CreateOutlinedIcon fontSize='small' color='secondary' />
                </button>
                <input type="file" name="myfile1" onChange={dpImageUpload} />
              </div>
            </div>
            <ul className='userMenu clearfix'>
              <li><Link className={activeMenu == 'Profile' ? 'active' : ''} onClick={() => activeMenuSet("Profile")} to={`${path}/Profile`}>Profile</Link> </li>
              <li><Link className={activeMenu == 'About' ? 'active' : ''} onClick={() => activeMenuSet("About")} to={`${path}/About`}> About</Link></li>
              <li><Link className={activeMenu == 'Friends' ? 'active' : ''} onClick={() => activeMenuSet("Friends")} to={`${path}/Friends`}>Friends</Link> </li>
              <li><Link className={activeMenu == 'Albums' ? 'active' : ''} onClick={() => activeMenuSet("Albums")} to={`${path}/Albums`}>Albums</Link> </li>
            </ul>
          </Container>
        </div>
        <Container>
          <Switch>
            <Route exact path={`${path}`}>
              <Redirect to={`${path}/Profile`} />
            </Route>
            <Route path={`${path}/Profile`} component={Profile} />
            <Route path={`${path}/About`} component={About} />
            <Route path={`${path}/Friends`} component={Friends} />
            <Route path={`${path}/Albums`} component={Albums} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default User;
























