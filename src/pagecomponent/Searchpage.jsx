import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, Select, FormControlLabel, Checkbox, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import userImg from '../assets/images/user2.jpg';

function Searchpage(props) {

  const [friendList, friendListSet] = useState([]);

  const friendListLoad = () => {
    for (let i = 0; i < 10; i++) {
      friendList.push({
        key: i.toString(),
        title: `Josie Jackson ${i}`,
        Age: 26,
        Gender: 'Female',
        Country: 'Pakistan',
      })
    }
    friendListSet(friendList => [...friendList]);
  }

  useEffect(() => {
    friendListLoad();
  }, []);

  return (
    <div className='FindpartnerContanier'>
      <Grid container spacing={3}>
        <Grid item lg={2} md={2} sm={12} xs={12}>
          banner here
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <h1>Find Your Partner</h1>
          <Grid container>
            {friendList.map((item, key) => {
              return (
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <div className='findPartnerBox clearfix' key={key.toString()}>
                    <img src={userImg} alt='' />
                    <h2>{item.title}</h2>
                    <p>
                      <span>Age<i>{item.Age}</i></span>
                      <span>Gender<i>{item.Gender}</i></span>
                      <span>Country<i>{item.Country}</i></span>
                    </p>
                    <Button variant="contained" size="small" color='secondary'>Visit Profile</Button>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item lg={2} md={2} sm={12} xs={12}>
        banner here
        </Grid>
      </Grid>
    </div>
  );
}

export default Searchpage;
























