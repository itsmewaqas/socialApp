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

import Changepassword from '../pagecomponent/Changepassword';
import Privacysettings from '../pagecomponent/Privacysettings';
import Friendrequest from '../pagecomponent/Friendrequest';
import Support from '../pagecomponent/Support';

function Settings(props) {

  const [activeMenu, activeMenuSet] = useState('Changepassword');

  let { path } = useRouteMatch();
  let history = useHistory();

  useEffect(() => {
  }, []);

  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Router>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <div className='settingLeftBlock'>
                <h3>Settings</h3>
                <ul>
                  <li><Link className={activeMenu == 'Changepassword' ? 'active' : ''} onClick={() => activeMenuSet("Changepassword")} to={`${path}/Changepassword`}>Change Password</Link> </li>
                  <li><Link className={activeMenu == 'Privacysettings' ? 'active' : ''} onClick={() => activeMenuSet("Privacysettings")} to={`${path}/Privacysettings`}> Privacy Settings</Link></li>
                  <li><Link className={activeMenu == 'Friendrequest' ? 'active' : ''} onClick={() => activeMenuSet("Friendrequest")} to={`${path}/Friendrequest`}>Friend Request</Link> </li>
                  <li><Link className={activeMenu == 'Support' ? 'active' : ''} onClick={() => activeMenuSet("Support")} to={`${path}/Support`}>Support</Link> </li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <div className='settingRightBlock clearfix'>
                <Switch>
                  <Route exact path={`${path}`}>
                    <Redirect to={`${path}/Changepassword`} />
                  </Route>
                  <Route path={`${path}/Changepassword`} component={Changepassword} />
                  <Route path={`${path}/Privacysettings`} component={Privacysettings} />
                  <Route path={`${path}/Friendrequest`} component={Friendrequest} />
                  <Route path={`${path}/Support`} component={Support} />
                </Switch>
              </div>
            </Grid>
          </Router>
        </Grid>
      </Container>
    </div>
  );
}

export default Settings;
























