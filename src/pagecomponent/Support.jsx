import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';

function Support(props) {

    const [count, countSet] = useState('');

    useEffect(() => {
    }, []);

    return (
        <div>
            <h4>Support</h4>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>

                </Grid>
            </Grid>
        </div>
    );
}

export default Support;
