import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import Friendlist from '../sharedcomponent/Friendlist';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { unstable_debounce } from '@mui/utils';

function Albums(props) {

    const [albumView, albumViewSet] = useState(true);
    const [albumDetailView, albumDetailViewSet] = useState(false);
    const [open, setOpen] = useState(false);
    const [imageID, imageIDSet] = useState(0);
    const [createGallery, createGallerySet] = useState(false);
    const [albumTitle, albumTitleSet] = useState('');
    const [albumList, albumListSet] = useState([]);
    const [privacyCtrl, SetprivacyCtrl] = useState('');

    const gotoDetailView = () => {
        albumViewSet(false);
        albumDetailViewSet(true);
    }

    const backAlbum = () => {
        albumViewSet(true);
        albumDetailViewSet(false);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const openModal = (id) => {
        setOpen(true);
        imageIDSet(id);
        createGallerySet(false);
    }

    const cratGallery = () => {
        setOpen(true);
        createGallerySet(true);
    }

    const deleteImage = (index) => {
        var array = albumList;
        array.splice(index, 1);
        albumListSet([...array]);
    };

    const selectAlbumImgs = e => {
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
            albumListSet(temp)
        }, 300);
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        if (currentIndex !== 0)
            setCurrentIndex(currentIndex - 1)
    }

    const goToNextSlide = (e) => {
        if (currentIndex < images.length - 1)
            setCurrentIndex(currentIndex + 1)
    }

     const images = [
        {
            id: 0,
            img: require('../assets/images/postimg1.jpg'),
        },
        {
            id: 1,
            img: require('../assets/images/postimg2.jpg'),
        },
        {
            id: 2,
            img: require('../assets/images/postimg3.jpg'),
        },
        {
            id: 3,
            img: require('../assets/images/postimg4.jpg'),
        },
        {
            id: 4,
            img: require('../assets/images/postimg5.jpg'),
        },
        {
            id: 5,
            img: require('../assets/images/postimg6.jpg'),
        },
     ];

    useEffect(() => {
    }, []);


    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>

                        {albumView ?
                            <div className='pictureContainer clearfix'>
                                <h3>Album <a onClick={() => cratGallery()} className='createAlbumBtn'>Create Album</a></h3>
                                {Friendlist.map((item, key) => {
                                    return (
                                        <a className='albumBox clearfix' onClick={() => gotoDetailView()} key={key.toString()} >
                                            <img src={item.friendPicture} alt='' />
                                            <p>{item.friendName}<span>{item.friendType}</span></p>
                                        </a>
                                    )
                                })}
                            </div> : null}

                        {albumDetailView ?
                            <div className='pictureContainer clearfix'>
                                <h3>Album Detail
                                    <a onClick={() => backAlbum()}><ArrowBackIcon color="action" fontSize="medium" /></a></h3>

                                {Friendlist.map((item, key) => {
                                    return (
                                        <a className='albumBox clearfix' onClick={() => openModal(item.id)} key={key.toString()} >
                                            <img src={item.friendPicture} alt='' />
                                        </a>
                                    )
                                })}
                            </div>
                            : null}

                    </Grid>
                </Grid>
            </Container>
            <Dialog
                open={open}
                fullWidth={true}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                {createGallery ?
                    <div>
                        <DialogContent>
                            <div className='createAlbumBox clearfix'>
                                <h5>Create Album</h5>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <TextField
                                        label="Album Title"
                                        color="secondary"
                                        variant="standard"
                                        type="text"
                                        placeholder="Enter Album Title"
                                        fullWidth={true}
                                        value={albumTitle}
                                        onChange={e => albumTitleSet(e.target.value)}
                                    />
                                </Grid>
                                <select className='albumPostMenu'
                                    value={privacyCtrl}
                                    onChange={(e) => { SetprivacyCtrl(e.target.value) }}>
                                    <option value="Public">Public</option>
                                    <option value="private">private</option>
                                    <option value="Only_Friend">Only Friend</option>
                                    <option value="Friend_ToF_riend">Friend To Friend</option>
                                </select>
                                <div className='filesUpload'>
                                    <label>Select Pictures:  </label>
                                    <input type="file" multiple onChange={selectAlbumImgs} />
                                </div>
                                <div className='imagePreviewBox'>
                                    {albumList.map((item, index) => {
                                        return (
                                            <div key={index.toString()}>
                                                <a onClick={() => deleteImage(index)}>X</a>
                                                <img src={item} alt='' />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button className='picBtn' size="small" variant="contained" color="secondary">Create Album</Button>
                        </DialogActions>
                    </div>
                    :
                    <div>
                        <DialogContent style={{paddingBottom:0}}>
                            <div className='modalImgBoxleft'>
                                {images?.length &&
                                    <img src={images[currentIndex]?.img + `?key=${currentIndex}`} />}
                                <button class="leftBtn" onClick={goToPrevSlide}><ArrowBackIosIcon fontSize="large" /></button>
                                <button class="rightBtn" onClick={goToNextSlide}><ArrowForwardIosIcon fontSize="large" /></button>
                            </div>
                            {/* <div className='picViewBox clearfix'>
                                <img src={Friendlist.filter((x) => x.id === imageID)[0].friendPicture} alt='' />
                            </div> */}
                        </DialogContent>
                        <DialogActions>
                            <div className='picBtnMain'>
                                <button className='picBtn' size="small" variant="contained" color="secondary">Download</button>
                                <button className='picBtn' size="small" variant="contained" color="error">Delete</button>
                            </div>
                        </DialogActions>
                    </div>
                }
            </Dialog>
        </div>
    );
}

export default Albums;
