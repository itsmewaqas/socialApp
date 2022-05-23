import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Chatdata from '../sharedcomponent/Chatdata';
import CloseIcon from '@mui/icons-material/Close';

function Modallikes({ likesModalData, likesModalClose }) {

    const postId = likesModalData;

    useEffect(() => {
    }, [likesModalData]);


    return (
        <div>
            <Dialog
                open={true}
                fullWidth={false}
                maxWidth='sm'
                onClose={() => likesModalClose()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent>
                    <div className='likesmodal'>
                        <a className='likeClose' onClick={() => likesModalClose()}>
                            <CloseIcon fontSize='small' /></a>
                        <h4>Likes</h4>
                        <Scrollbars style={{ height: 200 }}>
                            <ul>
                                {Chatdata.map((item, key) => {
                                    return (
                                        <li key={key.toString()}>
                                            <a>
                                                <img src={item.chatUserPhoto} alt="" />
                                                {item.chatUserName}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Scrollbars>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Modallikes;


