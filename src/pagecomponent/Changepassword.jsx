import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';

function Changepassword(props) {

    const [currentPassword, currentPasswordSet] = useState('');
    const [newPassword, newPasswordSet] = useState('');
    const [confirmPassword, confirmPasswordSet] = useState('');

    useEffect(() => {
    }, []);

    return (
        <div>
            <h4>Change Password</h4>
            <div style={{ padding: 20 }}>
                <Grid container spacing={3}>
                    <p>If you want to change your password, please do it below. You will need to enter your
                        current password in order to change it</p>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField
                            label="Current Password"
                            color="secondary"
                            variant="standard"
                            type="password"
                            placeholder="Enter Current Password"
                            fullWidth={true}
                            value={currentPassword}
                            onChange={e => currentPasswordSet(e.target.value)}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField
                            label="New Password"
                            color="secondary"
                            variant="standard"
                            type="password"
                            placeholder="Enter New Password"
                            fullWidth={true}
                            value={newPassword}
                            onChange={e => newPasswordSet(e.target.value)}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField
                            label="Confirm Password"
                            color="secondary"
                            variant="standard"
                            type="password"
                            placeholder="Enter Confirm Password"
                            fullWidth={true}
                            value={confirmPassword}
                            onChange={e => confirmPasswordSet(e.target.value)}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Button fullWidth={true} variant="contained" color="secondary" type="submit">Change Password</Button>

                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Changepassword;
