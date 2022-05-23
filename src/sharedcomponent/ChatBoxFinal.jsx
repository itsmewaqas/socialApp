import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import userImg from '../assets/images/user2.jpg';

function ChatBox(props) {

    const [chatPanel, chatPanelSet] = useState("chatBoxPanel");
    const [chatSearch, chatSearchSet] = useState("");
    const [chatList, chatListSet] = useState([
        {
            id: 0,
            userTitle: 'waqas',
            UserImg: userImg,
            status: 'red',
        },
        {
            id: 1,
            userTitle: 'ali',
            UserImg: userImg,
            status: 'green',
        },
        {
            id: 2,
            userTitle: 'zeeshan',
            UserImg: userImg,
            status: 'red',
        },
        {
            id: 3,
            userTitle: 'waseem',
            UserImg: userImg,
            status: 'green',
        },
        {
            id: 4,
            userTitle: 'hamza',
            UserImg: userImg,
            status: 'red',
        },
        {
            id: 5,
            userTitle: 'jawad',
            UserImg: userImg,
            status: 'green',
        },
        {
            id: 6,
            userTitle: 'alber',
            UserImg: userImg,
            status: 'red',
        },
        {
            id: 7,
            userTitle: 'junaid',
            UserImg: userImg,
            status: 'green',
        },
        {
            id: 8,
            userTitle: 'fahad',
            UserImg: userImg,
            status: 'red',
        },
        {
            id: 9,
            userTitle: 'usman',
            UserImg: userImg,
            status: 'green',
        },
    ]);

    function openPanel() {
        chatPanelSet(chatPanel == 'chatBoxPanel' ? 'chatBoxPanelExpend' : 'chatBoxPanel');
        selectUserSet(false);
    }

    const [selectUser, selectUserSet] = useState(null);

    const openChatBox = (id) => {
        selectUserSet(id);
    }

    useEffect(() => {
    }, []);

    // call this component >> <ChatBox />

    return (
        <div>
            <div className={chatPanel}>
                <button className='chatBoxBtn' onClick={openPanel}><CommentOutlinedIcon fontSize="small" color="secondary" /> Chat</button>
                <div className='chatBoxContent'>
                    <h3>Let's Start</h3>
                    <input className='searchInput' type="text" placeholder="Search Friend" value={chatSearch} onChange={(e) => { chatSearchSet(e.target.value) }} />
                    <Scrollbars style={{ height: 400 }}>
                        <ul>
                            {chatList.map((item, key) => {
                                return (
                                    <li><a href='#_'
                                        onClick={() => openChatBox(item.id)}
                                        key={key.toString()}>
                                        <span style={{ backgroundColor: item.status }}>
                                        </span> <img src={item.UserImg} alt="" />
                                        {item.userTitle}</a>
                                        {selectUser === item.id ?
                                            <ul>
                                                <p>chat start with {item.userTitle}</p>
                                            </ul>
                                            : null}
                                    </li>
                                )
                            })}
                        </ul>
                    </Scrollbars>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;


// chatbox style start
// .chatBoxBtn{
//     position: fixed;
//     cursor: pointer;
//     right: 10px;
//     padding:15px;
//     font-size: 14px;
//     font-family: 'Poppins-Bold';
//     bottom: 0px;
//     color: #000;
//     text-align: left;
//     background-color: #fff;
//     box-shadow: 0px 0px 5px #797979;
//     border: none;
//     z-index: 99;
//     width: 250px;
//   }
//   .chatBoxBtn svg{
//     vertical-align: middle;
//   }
//   .chatBoxPanel {
//     position: fixed;
//     right: 10px;
//     padding: 15px;
//     box-sizing: border-box;
//     bottom: -50px;
//     background-color: #fff;
//     z-index: 99;
//     width: 250px;
//     height: 10vh;
//     -webkit-transition: all 0.4s;
//     -moz-transition: all 0.4s;
//     -o-transition: all 0.4s;
//     transition: all 0.4s;
//   }
//   .chatBoxPanelExpend {
//     width: 250px;
//     position: fixed;
//     right: 10px;
//     padding: 15px;
//     box-sizing: border-box;
//     border-radius: 5px 5px 0px 0px;
//     box-shadow: 0px 0px 5px #797979;
//     bottom: 50px;
//     background-color: #fff;
//     z-index: 99;
//     height: 80vh;
//     -webkit-transition: all 0.4s;
//     -moz-transition: all 0.4s;
//     -o-transition: all 0.4s;
//     transition: all 0.4s;
//   }
//   .chatBoxContent {
//     display: block;
//   }
//   .chatBoxContent h3 {
//     color: #787676;
//     font-size: 14px;
//     color: #333;
//     padding: 0px 0px 5px;
//     line-height: 20px;
//     font-family: "Poppins-Regular" !important;
//     font-weight: normal;
//   }
//   .chatBoxContent .searchInput{
//     display: block;
//     width: 100%;
//     height: 30px;
//     border: #ccc solid 1px;
//     border-radius: 15px;
//     margin: 5px 0px;
//   }
//   .chatBoxContent ul{
//      list-style: none;
//      display: block;
//      margin: 0px;
//      padding: 15px 0px;
//   }
//   .chatBoxContent ul li{
//     text-align: left;
//     display: block;
//     margin: 0px;
//     padding:0px;
//     position: relative;
//   }
//   .chatBoxContent ul li a{
//     font-family: 'Poppins-Regular';
//     display: block;
//     font-size: 14px;
//     line-height: 18px;
//     color: #000;
//     padding:10px 5px;
//   }
//   .chatBoxContent ul li:hover a{
//     background-color: #f8f8f8;
//   }
//   .chatBoxContent ul li a img{
//     vertical-align: middle;
//     margin-right: 15px;
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//   }
//   .chatBoxContent ul li a span{
//     position: absolute;
//     left: 10px;
//     top: 10px;
//     width: 8px;
//     height: 8px;
//     border-radius: 50%;
//     z-index:9;
//   }
//   .chatBoxContent ul li ul{
//     display: block;
//     background-color: #f8f8f8;
//     width: 215px;
//     height: 150px;
//     padding: 5px;
//     box-sizing: border-box;
//     font-size: 12px;
//     margin: 1px 0px 10px;
//     border: #f8f8f8 solid 1px;
//     border-top: none;
//   }
//   .chatBoxContent ul li ul p{
//     display: block;
//     font-size: 12px;
//     color: #000;
//     padding: 5px 0px;
//   }
  // chatbox style end
