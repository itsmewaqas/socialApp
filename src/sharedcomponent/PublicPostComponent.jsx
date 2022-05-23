import React, { useState, useEffect, useRef } from 'react';
import noDP from '../assets/images/noDP.jpeg';
import userPic from '../assets/images/user2.jpg';
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function PublicPostComponent({ item, index, reportsModal, imageModal, likesModal }) {

    const [publicPost, publicPostSet] = useState('');
    const [openComment, openCommentSet] = useState(false);

    const [likes, setLikes] = useState(15);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLikes(isLiked ? likes - 1 : likes + 1);
        setIsLiked(!isLiked);
    }

    const openCommentBox = (id) => {
        openCommentSet(id);
    }

    const [reportBtn, SetreportBtn] = useState(false);
    const reportBtnCtrl = () => {
        SetreportBtn(!reportBtn);
    }

    // report menu click outside menu hide code start
    const reportMenu = useRef(null);
    const closeOpenMenus = (e) => {
        if (reportMenu.current && reportBtn && !reportMenu.current.contains(e.target)) {
            SetreportBtn(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenus);
    // report menu click outside menu hide code end



    useEffect(() => {
    }, []);

    return (
        <div className='publicPostContainer clearfix' key={index.toString()}>
            <div className='publicReport' onClick={() => reportBtnCtrl()}><MoreHorizIcon fontSize="large" /></div>
            {reportBtn && <a className='publicReportMenu' ref={reportMenu} onClick={() => reportsModal(item.id)}>Reports</a>}
            <div className='publicPostTop clearfix'>
                <img src={item.userImage} alt='' />
                <h4>{item.firstName} <span>{item.time}</span></h4>
            </div>
            <div className='publicPostMiddle clearfix'>
                <h5>{item.text}</h5>
                {item.images?.filter((_, index) => index < 8).map((image, key) => {
                    return (
                        <div key={key.toString()}>
                            <a onClick={() => imageModal(item.id, image.id)}>
                                {item.images.length <= 1 ?
                                    <img src={image.imageUrl} className="imgStyle1" alt='' />
                                    :
                                    item.images.length <= 2 ?
                                        <img src={image.imageUrl} className="imgStyle2" alt='' />
                                        :
                                        <img src={image.imageUrl} className="imgStyle3" alt='' />
                                }
                            </a>
                        </div>)
                })}
            </div>
            <div className='publicPostStatusRow clearfix'>
                <div className='likeBox' >
                    <i onClick={likeHandler}>
                        {isLiked == true ?
                            <FavoriteOutlinedIcon color="error" /> :
                            <FavoriteBorderOutlinedIcon color="#ccc" />}
                    </i>
                    <a onClick={() => likesModal(item.id)}>{item.likes}</a>
                </div>
                <a className='commentLink' onClick={() => openCommentBox(item.id)}>
                    <ChatOutlinedIcon fontSize="medium" />
                    <p>{item.comments}</p>
                </a>
            </div>

            {
                openComment == item.id ?
                    <div>
                        {/* comment box start */}
                        {item.commentsTemp.map((i, key) => {
                            return (
                                <div className='publicComment clearfix' key={key.toString()}>
                                    <img src={i.imageUrl} alt='' />
                                    <h6>{i.fullName} <span></span></h6>
                                    <p>{i.comment}</p>
                                </div>)
                        })}
                        {/* comment box end */}

                        <div className='publicPostCommentRow clearfix'>
                            <img src={userPic} alt='' />
                            <div className='textBox'>
                                <input type="text" className='txtField' value={publicPost} onChange={e => publicPostSet(e.target.value)} placeholder="What's on your mind?" />
                                <a className='emojiesLink'><SentimentSatisfiedOutlinedIcon fontSize='medium' /></a>
                                <div class="publicPostPic">
                                    <button class="publicPostPicBtn"><PanoramaOutlinedIcon fontSize='medium' /></button>
                                    <input type="file" name="myfile4" />
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div >
    );
}

export default PublicPostComponent;
