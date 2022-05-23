import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Postdata from '../sharedcomponent/Postdata';
import Chatdata from '../sharedcomponent/Chatdata';

function Modalimg({ imgModalData, modalClose }) {

    const [postId, setpostId] = useState(null);
    const [imageId, setimageId] = useState(null);
    const [imagesList, setimagesList] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let { postId, imageId } = imgModalData;
        if (postId && imageId && Postdata?.length) {
            const post = Postdata.filter(post => post.id === postId)
            if (post?.length && post[0].images?.length) {
                setimagesList(post[0].images)
                setpostId(postId)
                setimageId(imageId)
                for (let index = 0; index < (post[0].images.length); index++) {
                    if (post[0].images[index].id === imageId) {
                        setCurrentIndex(index)
                        break;
                    }
                }
            } else modalClose()
        } else modalClose()
    }, [imgModalData]);


    const goToPrevSlide = () => {
        if (currentIndex !== 0)
            setCurrentIndex(currentIndex - 1)
    }

    const goToNextSlide = (e) => {
        if (currentIndex < imagesList.length - 1)
            setCurrentIndex(currentIndex + 1)
    }

    const [likes, setLikes] = useState(15);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLikes(isLiked ? likes - 1 : likes + 1);
        setIsLiked(!isLiked);
    }

    return (
        <div>
            <Dialog
                open={true}
                fullWidth={true}
                maxWidth='md'
                onClose={() => modalClose()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent>
                    <Grid container spacing={0}>
                        <Grid item lg={8} md={8} sm={8} xs={8}>
                            <div className='modalImgBoxleft'>
                                {imagesList?.length &&
                                    <img src={imagesList[currentIndex]?.imageUrl + `?key=${currentIndex}`} />}
                                <button class="leftBtn" onClick={goToPrevSlide}><ArrowBackIosIcon fontSize="large" /></button>
                                <button class="rightBtn" onClick={goToNextSlide}><ArrowForwardIosIcon fontSize="large" /></button>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                            <div className='modalImgBoxRight'>
                                {postId ?
                                    <div className='modalImgBoxRightTop'>
                                        <img src={Postdata.filter((Post) => Post.id === postId)[0].userImage} alt="" />
                                        <h4>{Postdata.filter((Post) => Post.id === postId)[0].firstName}
                                            <span><a className='meLikes' >
                                                <i onClick={likeHandler}>
                                                    {isLiked == true ?
                                                        <FavoriteOutlinedIcon color="error" /> :
                                                        <FavoriteBorderOutlinedIcon color="#ccc" />}
                                                </i>{likes}
                                            </a></span></h4>
                                    </div>
                                    : null}

                                <Scrollbars style={{ height: 250 }}>
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
                                <div className='clearfix'></div>
                                <Button className='canBtn' size="small" fullWidth={true} variant="contained" color="secondary"
                                    onClick={() => modalClose()} >Cancel</Button>
                            </div>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Modalimg;



