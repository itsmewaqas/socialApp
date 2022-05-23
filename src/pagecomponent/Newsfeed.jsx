import React, { useState } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import newsFeedBanner from '../assets/images/newsFeedBanner1.png';
import ChatBox from '../sharedcomponent/ChatBox';
import PrivatePostComponent from '../sharedcomponent/PrivatePostComponent';
import PublicPostComponent from '../sharedcomponent/PublicPostComponent';
import Postdata from '../sharedcomponent/Postdata';
import Modalimg from '../sharedcomponent/Modalimg';
import Modalreports from '../sharedcomponent/Modalreports';
import Modallikes from '../sharedcomponent/Modallikes';

function Newsfeed({ openCloseChatById }) {

  const [showReportModal, SetshowReportModal] = useState(false);
  const [reportModalData, SetreportModalData] = useState(null);

  const reportsModal = (postId) => { 
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

  return (
    <div className='NewsfeedContanier'>

      {showReportModal && <Modalreports reportModalData={reportModalData} reportModalClose={reportModalClose} />}
      {showImgModal && <Modalimg imgModalData={imgModalData} modalClose={modalClose} />}
      {showLikesModal && <Modallikes likesModalData={likesModalData} likesModalClose={likesModalClose} />}

      <Grid container spacing={3}>
        <Grid item lg={2} md={2} sm={12} xs={12}>
          banner here
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
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <div className='bannerChatArea'>
            <img className='NewsfeedBanner' src={newsFeedBanner} alt="" />
            <ChatBox openCloseChatById={openCloseChatById} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Newsfeed;
