import React, { useState, useEffect, useRef } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Privacysettings(props) {

    const [prcyMenu, prcyMenuSet] = useState(null);

    const [privacyList, privacyListSet] = useState([
        {
            id: 0,
            privacyName: 'Friends',
        },
        {
            id: 1,
            privacyName: 'Post',
        },
        {
            id: 2,
            privacyName: 'Personal/ContactInfo',
        }
    ]);

    const privacyMenu = (id) => {
        prcyMenuSet(id);
    }

    // menu click outside menu hide code start
    const catMenu = useRef(null);
    const closeOpenMenus = (e) => {
        if (catMenu.current && prcyMenu && !catMenu.current.contains(e.target)) {
            prcyMenuSet(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenus);
    // menu click outside menu hide code end

    useEffect(() => {
    }, []);

    return (
        <div>
            <h4>Privacy Settings</h4>
            <div style={{ padding: 20 }}>
                <Grid container spacing={3}>
                    <p>If you want to change your Privacy Settings, please do it below.
                        You will need to enter your current password in order to change it</p>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <ul className='privacyList'>
                            {privacyList.map((item, index) => {
                                return (
                                    <li key={index.toString()}>
                                        <a onClick={() => privacyMenu(item.id)}>{item.privacyName}
                                            <KeyboardArrowDownIcon color="action" fontSize="large" /></a>
                                        {prcyMenu === item.id ?
                                            <ul ref={catMenu}>
                                                <li onClick={() => prcyMenuSet(!prcyMenu)}><a>Public</a></li>
                                                <li onClick={() => prcyMenuSet(!prcyMenu)}><a>Private</a></li>
                                                <li onClick={() => prcyMenuSet(!prcyMenu)}><a>Only me</a></li>
                                            </ul>
                                            : null}
                                    </li>
                                )
                            })}
                        </ul>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Button fullWidth={true} variant="contained" color="secondary" type="submit">Save Changes</Button>
                    </Grid>
                </Grid>
            </div>
        </div>

    );
}

export default Privacysettings;
