import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

function About(props) {

    const [editView, editViewSet] = useState(false);
    const [id, idSet] = useState('');
    const [firstName, firstNameSet] = useState('');
    const [lastName, lastNameSet] = useState('');
    const [mobileNumber, mobileNumberSet] = useState('');
    const [email, emailSet] = useState('');
    const [dob, dobSet] = useState('');
    const [gender, genderSet] = useState('');
    const [about, aboutSet] = useState('');
    const [address, addressSet] = useState('');
    const [city, citySet] = useState('');
    const [country, countrySet] = useState('');
    const [religion, religionSet] = useState('');

    const editInfo = () => {
        editViewSet(!editView);
    }

    const updateInfo = () => {
        editViewSet(!editView);
    }

    const handleDatePicker = (newValue) => { 
        dobSet(newValue);
    };

    useEffect(() => {
    }, []);

    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={2} md={2} sm={4} xs={4}>
                        <div className='aboutLeft'>
                            <p>First Name</p>
                            <p>Last Name</p>
                            <p>Mobile Number</p>
                            <p>Email</p>
                            <p>Date Of Birth</p>
                            <p>Gender</p>
                            <p>About</p>
                            <p>Address</p>
                            <p>City</p>
                            <p>Country</p>
                            <p>Religion</p>
                        </div>
                    </Grid>
                    <Grid item lg={10} md={10} sm={8} xs={8}>
                        <div className='aboutRight'>
                            {!editView ?
                                <button onClick={() => editInfo()} className='aboutRightLink'><CreateOutlinedIcon fontSize="small" /> Edit</button>
                                :
                                <button onClick={() => updateInfo()} className='aboutRightLink'><SystemUpdateAltOutlinedIcon fontSize="small" /> Update</button>
                            }
                            {!editView ?
                                <div>
                                    <p>Jawad</p>
                                    <p>Ali</p>
                                    <p>+923158731014</p>
                                    <p>ahads62426@gmail.com</p>
                                    <p>12/07/1997</p>
                                    <p>Male</p>
                                    <p>Lorem ispem is simply a dummy text of the printing and typesetting industry</p>
                                    <p>west</p>
                                    <p>karachi</p>
                                    <p>pakistan</p>
                                    <p>islam</p>
                                </div>
                                :
                                <Grid container spacing={3}>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <div style={{ padding: 15 }}>
                                            <Grid container spacing={3}>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <TextField
                                                        className='editFormPa'
                                                        label=""
                                                        color="secondary"
                                                        variant="standard"
                                                        type="text"
                                                        fullWidth={true}
                                                        value={firstName}
                                                        onChange={e => firstNameSet(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <TextField
                                                        className='editFormPa'
                                                        label=""
                                                        color="secondary"
                                                        variant="standard"
                                                        type="text"
                                                        fullWidth={true}
                                                        value={lastName}
                                                        onChange={e => lastNameSet(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <TextField
                                                        className='editFormPa'
                                                        label=""
                                                        color="secondary"
                                                        variant="standard"
                                                        type="text"
                                                        fullWidth={true}
                                                        value={mobileNumber}
                                                        onChange={e => mobileNumberSet(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <TextField
                                                        className='editFormPa'
                                                        label=""
                                                        color="secondary"
                                                        variant="standard"
                                                        type="text"
                                                        fullWidth={true}
                                                        value={email}
                                                        onChange={e => emailSet(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <DesktopDatePicker
                                                            className='editFormPa'
                                                            label=""
                                                            inputFormat="MM/dd/yyyy"
                                                            value={dob}
                                                            onChange={handleDatePicker}
                                                            renderInput={(params) => <TextField
                                                                fullWidth
                                                                color="secondary"
                                                                variant="standard"
                                                                {...params} />}
                                                        />
                                                    </LocalizationProvider>
                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <FormControlLabel
                                                        className='editFormPa'
                                                        value="Male"
                                                        control={<Radio size="small" checked={gender === 'Male'} value="Male" onChange={() => genderSet('Male')} color="secondary" />}
                                                        label="Male"
                                                        labelPlacement="end"
                                                    />
                                                    <FormControlLabel
                                                        className='editFormPa'
                                                        value="Female"
                                                        control={<Radio size="small" checked={gender === 'Female'} value="Female" onChange={() => genderSet('Female')} color="secondary" />}
                                                        label="Female"
                                                        labelPlacement="end"
                                                    />
                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <TextField
                                                        className='editFormPa'
                                                        label=""
                                                        color="secondary"
                                                        variant="standard"
                                                        type="text"
                                                        fullWidth={true}
                                                        value={about}
                                                        onChange={e => aboutSet(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <TextField
                                                        className='editFormPa'
                                                        label=""
                                                        color="secondary"
                                                        variant="standard"
                                                        type="text"
                                                        fullWidth={true}
                                                        value={address}
                                                        onChange={e => addressSet(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <FormControl fullWidth variant="standard" color="secondary" className='editFormPa'>
                                                        {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            label="Status"
                                                            value={city}
                                                            onChange={(e) => { citySet(e.target.value) }}>
                                                            <MenuItem value="Karachi">Karachi</MenuItem>
                                                            <MenuItem value="Lahore">Lahore</MenuItem>
                                                            <MenuItem value="Islamabad">Islamabad</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <FormControl fullWidth variant="standard" color="secondary" className='editFormPa'>
                                                        {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            label="Status"
                                                            value={country}
                                                            onChange={(e) => { countrySet(e.target.value) }}>
                                                            <MenuItem value="Pakistan">Pakistan</MenuItem>
                                                            <MenuItem value="India">India</MenuItem>
                                                            <MenuItem value="Uae">Uae</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <FormControl fullWidth variant="standard" color="secondary" className='editFormPa'>
                                                        {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            label="Status"
                                                            value={religion}
                                                            onChange={(e) => { religionSet(e.target.value) }}>
                                                            <MenuItem value="Islam">Islam</MenuItem>
                                                            <MenuItem value="Christianity">Christianity</MenuItem>
                                                            <MenuItem value="Hinduism">Hinduism</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            }
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default About;
