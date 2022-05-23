import React, { useState, useEffect, useRef } from 'react';
import { Grid, Container, Input, TextField, Button, item, Menu, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Friendlist from '../sharedcomponent/Friendlist';

function Friends(props) {

    const [friendsListMenu, friendsListMenuSet] = useState(null);

    const openMenu = (id) => {
        friendsListMenuSet(id);
    }

    // menu click outside menu hide code start
    const catMenu = useRef(null);
    const closeOpenMenus = (e) => {
        if (catMenu.current && friendsListMenu && !catMenu.current.contains(e.target)) {
            friendsListMenuSet(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenus);
    // menu click outside menu hide code end

    useEffect(() => {
    }, []);

    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div className='friendsContainer'>
                            <h4>Friends <span>400</span></h4>
                            <Grid container>
                                {Friendlist.map((item, key) => {
                                    return (
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <div className='friendsBox clearfix' key={key.toString()}>
                                                <img src={item.friendPicture} alt='' />
                                                <h2>
                                                    {item.friendName}
                                                    <span>{item.friendType}</span>
                                                </h2>
                                                <a onClick={() => openMenu(item.id)}><MoreHorizIcon fontSize="large" /></a>
                                                {friendsListMenu === item.id ?
                                                    <div className='friendsBoxMenu' ref={catMenu}>
                                                        <ul>
                                                            <li onClick={() => friendsListMenuSet(!friendsListMenu)}><a>Block</a></li>
                                                            <li onClick={() => friendsListMenuSet(!friendsListMenu)}><a>Share</a></li>
                                                            <li onClick={() => friendsListMenuSet(!friendsListMenu)}><a>View</a></li>
                                                        </ul>
                                                    </div>
                                                    : null}
                                            </div>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Friends;
