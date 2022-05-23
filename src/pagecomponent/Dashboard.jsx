import React, { useState } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { Scrollbars } from 'react-custom-scrollbars';
import Header from '../sharedcomponent/Header';
import Login from '../pagecomponent/Login';
import Newsfeed from '../pagecomponent/Newsfeed';
import Findpartner from '../pagecomponent/Findpartner';
import User from '../pagecomponent/User';
import Settings from '../pagecomponent/Settings';
import NoMatch from '../pagecomponent/NoMatch';
import Chatdata from '../sharedcomponent/Chatdata';
import CloseIcon from '@mui/icons-material/Close';
import Searchpage from '../pagecomponent/Searchpage';

function Dashboard(props) {

  const [chatIds, setChatIds] = useState([]);

  const openCloseChatById = id => {
    if (chatIds.indexOf(id) >= 0) {
      let newArr = [...chatIds]
      newArr.splice(chatIds.indexOf(id), 1)
      setChatIds(newArr)
    }
    else setChatIds([...chatIds, id])
  }

  return (
    <div>
      <Header openCloseChatById={openCloseChatById} />
      <div className="dashboardContainer">
        {chatIds?.length ? <div className="chatBoxMain">
          {chatIds.map((chatId, key) => {
            return (<div className='chatBox' key={key.toString()}>
              <a className='chatClose' onClick={() => openCloseChatById(chatId)}><CloseIcon fontSize="small" color="color" /></a>
              <p className='chatBoxTitle'>
              <img src={Chatdata.filter((x) => x.id === chatId)[0].chatUserPhoto} alt="" />
              {Chatdata.filter((x) => x.id === chatId)[0].chatUserName}</p>
              <Scrollbars style={{ height: 200 }}>
               <ul>
                 <li>test chat here test chat here</li>
                 <li>test chat with ali test chat here</li>
                 <li>test chat here test chat here</li>
                 <li>test chat with ali</li>
                 <li>test chat here</li>
                 <li>test chat with ali</li>
                 <li>test chat here</li>
                 <li>test chat with ali</li>
               </ul>
              </Scrollbars>
              <div className='chatBoxField'>
                <textarea className="chatInput" rows="2" placeholder="Let's chta start here"></textarea>
                <a className='chatEmoji'><SentimentSatisfiedOutlinedIcon fontSize='medium' /></a>
              </div>
            </div>)
          })}
        </div> : null}
        <Switch>
          <Route path={`/`} exact>
            <Newsfeed openCloseChatById={openCloseChatById} />
          </Route>
          <Route path={`/Findpartner`} exact component={Findpartner} />
          <Route path={`/Searchpage`} exact component={Searchpage} />
          <Route path={`/User`} component={User} />
          <Route path={`/Settings`} component={Settings} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
