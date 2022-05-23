import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import Friendlist from '../sharedcomponent/Friendlist';

function Friendrequest(props) {

    const [count, countSet] = useState('');

    useEffect(() => {
    }, []);

    return (
        <div>
            <h4>Friend Request</h4>
            <Grid container>
                {Friendlist.map((item, key) => {
                    return (
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div className='addFriendBox clearfix' key={key.toString()}>
                                <img src={item.friendPicture} alt='' />
                                <h2>{item.friendName}</h2>
                                <Button variant="contained" size="small" color='secondary'>Accept</Button>
                                <Button variant="contained" size="small" color='error'>Delete</Button>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default Friendrequest;
