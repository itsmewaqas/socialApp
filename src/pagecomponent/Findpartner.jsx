import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, Select, FormControlLabel, Checkbox, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import userImg from '../assets/images/user2.jpg';

function Findpartner(props) {

  const [SelectGender, SelectGenderSet] = useState('');
  const [ageFrom, ageFromSet] = useState('');
  const [toFrom, toFromSet] = useState('');
  const [country, countrySet] = useState('');
  const [religion, religionSet] = useState('');

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
        <Grid item lg={7} md={7} sm={12} xs={12}>
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
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <div className='FindpartnerContanierSearchBlock'>
            <Grid container spacing={3}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <FormControl fullWidth variant="standard" color="secondary">
                  <InputLabel id="demo-simple-select-label">Looking For</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    size="small"
                    value={SelectGender}
                    onChange={(e) => { SelectGenderSet(e.target.value) }}>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <FormControl fullWidth variant="standard" color="secondary">
                  <InputLabel id="demo-simple-select-label">Age From</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    size="small"
                    value={ageFrom}
                    onChange={(e) => { ageFromSet(e.target.value) }}>
                    <MenuItem value="25">25</MenuItem>
                    <MenuItem value="26">26</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <FormControl fullWidth variant="standard" color="secondary">
                  <InputLabel id="demo-simple-select-label">To</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    size="small"
                    value={toFrom}
                    onChange={(e) => { toFromSet(e.target.value) }}>
                    <MenuItem value="25">25</MenuItem>
                    <MenuItem value="26">26</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <FormControl fullWidth variant="standard" color="secondary">
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    size="small"
                    value={country}
                    onChange={(e) => { countrySet(e.target.value) }}>
                    <MenuItem value="Pakistan">Pakistan</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <FormControl fullWidth variant="standard" color="secondary">
                  <InputLabel id="demo-simple-select-label">Religion</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    size="small"
                    value={religion}
                    onChange={(e) => { religionSet(e.target.value) }}>
                    <MenuItem value="Islam">Islam</MenuItem>
                    <MenuItem value="Christianity">Christianity</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="secondary" />}
                  label="Picture"
                  labelPlacement="end"
                />
                <Button fullWidth={true} variant="contained" color="secondary" type="submit">Confirm</Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Findpartner;
























