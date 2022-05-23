import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import PrivatePostComponent from '../sharedcomponent/PrivatePostComponent';
import PublicPostComponent from '../sharedcomponent/PublicPostComponent';
import Friendlist from '../sharedcomponent/Friendlist';
import Postdata from '../sharedcomponent/Postdata';
import Modalimg from '../sharedcomponent/Modalimg';
import Modalreports from '../sharedcomponent/Modalreports';
import Modallikes from '../sharedcomponent/Modallikes';

function Profile(props) {

    const [showReportModal, SetshowReportModal] = useState(false);
    const [reportModalData, SetreportModalData] = useState(null);

    const reportsModal = (postId) => {
        console.log('postId', postId);
        SetreportModalData(postId);
        SetshowReportModal(true);
    }

    const reportModalClose = () => {
        SetshowReportModal(false);
        SetreportModalData(null)
    };

    const [showImgModal, SetshowImgModal] = useState(false);
    const [imgModalData, setImgModalData] = useState(null);

    const imageModal = (postId, imageId) => {
        setImgModalData({ postId, imageId })
        SetshowImgModal(true);
    }

    const modalClose = () => {
        SetshowImgModal(false);
        setImgModalData(null)
    };

    const [showLikesModal, SetshowLikesModal] = useState(false);
    const [likesModalData, SetlikesModalData] = useState(null);

    const likesModal = (postId) => {
        SetlikesModalData(postId);
        SetshowLikesModal(true);
    }

    const likesModalClose = () => {
        SetshowLikesModal(false);
        SetlikesModalData(null)
    };


    useEffect(() => {
    }, []);


    return (
        <div>
            <Container>

                {showReportModal && <Modalreports reportModalData={reportModalData} reportModalClose={reportModalClose} />}
                {showImgModal && <Modalimg imgModalData={imgModalData} modalClose={modalClose} />}
                {showLikesModal && <Modallikes likesModalData={likesModalData} likesModalClose={likesModalClose} />}

                <Grid container spacing={3}>
                    <Grid item lg={5} md={4} sm={12} xs={12}>
                        <div className='pictureContainer clearfix'>
                            <h3>Photos <a>View All</a></h3>
                            {Friendlist.map((item, key) => {
                                return (
                                    <a className='pictureBox clearfix' key={key.toString()} >
                                        <img src={item.friendPicture} alt='' />
                                        <p>{item.friendName}<span>{item.friendType}</span></p>
                                    </a>
                                )
                            })}
                        </div>
                        <div className='pictureContainer clearfix'>
                            <h3>Friend <a>View All</a></h3>
                            {Friendlist.map((item, key) => {
                                return (
                                    <a className='pictureBox clearfix' key={key.toString()} >
                                        <img src={item.friendPicture} alt='' />
                                        <p>{item.friendName}<span>{item.friendType}</span></p>
                                    </a>
                                )
                            })}
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <PrivatePostComponent />
                        {Postdata.map((item, index) => {
                            return (
                                <PublicPostComponent
                                    item={item}
                                    index={index}
                                    reportsModal={reportsModal}
                                    imageModal={imageModal}
                                    likesModal={likesModal}
                                />
                            )
                        })}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Profile;
