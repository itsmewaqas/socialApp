import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import postPic from '../assets/images/user2.jpg';
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function PrivatePostComponent(props) {

    const [privacy, privacySet] = useState('');
    const [privatePost, privatePostSet] = useState('');
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const openModal = () => {
        setOpen(true);
    }

    const [postImages, postImagesSet] = useState([]);

    const postImagesUpload = e => {
        const temp = []
        if (e.target.files?.length) {
            for (let index = 0; index < e.target.files.length; index++) {
                const file = e.target.files[index];
                const fileReader = new FileReader();
                fileReader.onloadend = () => { temp.push(fileReader.result) };
                fileReader.readAsDataURL(file);
            }
        }
        setTimeout(() => {
            postImagesSet(temp)
        }, 300);
    };

    const deletePostImg = (index) => {
        var array = postImages;
        array.splice(index, 1);
        postImagesSet([...array]);
    };

    useEffect(() => {
    }, []);

    return (
        <div>
            <div className='privatePostContainer clearfix' onClick={() => openModal()}>
                <div className='privatePost'>
                    <img src={postPic} alt='' />
                    <h4>Waqas</h4>
                </div>
                <select value="" className='privatePostMenu' readOnly>
                    <option value="Public">Public</option>
                    <option value="private">private</option>
                    <option value="Only_Friend">Only Friend</option>
                    <option value="Friend_ToF_riend">Friend To Friend</option>
                </select>
                <input type="text" className='privatePostTextBox' readOnly placeholder="What's on your mind?" />
                <div class="privatePostPic">
                    <button class="privatePostPicBtn"><PanoramaOutlinedIcon fontSize='medium' /></button>
                    <input type="file" name="myfile3" />
                </div>
                <a className='emojiLink'><SentimentSatisfiedOutlinedIcon fontSize='medium' /></a>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent>
                    <div className='privatePostContainer boxShadowNone clearfix'>
                        <div className='privatePost'>
                            <img src={postPic} alt='' />
                            <h4>Waqas</h4>
                        </div>
                        <select value={privacy} onChange={e => privacySet(e.target.value)} className='privatePostMenu'>
                            <option value="Public">Public</option>
                            <option value="private">private</option>
                            <option value="Only_Friend">Only Friend</option>
                            <option value="Friend_ToF_riend">Friend To Friend</option>
                        </select>
                        <input type="text" className='privatePostTextBox' value={privatePost} onChange={e => privatePostSet(e.target.value)} placeholder="What's on your mind?" />
                        <div class="privatePostPic">
                            <button class="privatePostPicBtn"><PanoramaOutlinedIcon fontSize='medium' /></button>
                            <input type="file" name="myfile3" multiple onChange={postImagesUpload} />
                        </div>
                        <a className='emojiLink'><SentimentSatisfiedOutlinedIcon fontSize='medium' /></a>
                        <div className='imagePreviewBox'>
                            {postImages.map((image, index) => {
                                return (
                                    <div key={index.toString()}>
                                        <a onClick={() => deletePostImg(index)}>X</a>
                                        <img src={image} alt='' />
                                    </div>
                                )
                            })}
                        </div>
                        <Button fullWidth={true} variant="contained" color="secondary" type="submit">Post</Button>
                    </div>
                </DialogContent>
            </Dialog>

        </div>
    );
}

export default PrivatePostComponent;
