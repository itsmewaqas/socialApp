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

import { Scrollbars } from 'react-custom-scrollbars';
import Chatdata from '../sharedcomponent/Chatdata';

function ChatBox(props) {
 
    useEffect(() => { 
    }, []);

    return (
        <div className='chatBoxPanel'>
            <div className='chatBoxContent'>
                <h3>Let's Start</h3>
                <Scrollbars style={{ height: 250 }}>
                    <ul>
                        {Chatdata.map((item, key) => {
                            return (
                                <li key={key.toString()}>
                                    <a onClick={() => props.openCloseChatById(item.id)}>
                                        <span style={{ backgroundColor: item.status }}>
                                        </span> <img src={item.chatUserPhoto} alt="" />
                                        {item.chatUserName}</a></li>
                            )
                        })}
                    </ul>
                </Scrollbars>
            </div>
        </div>
    );
}

export default ChatBox;



