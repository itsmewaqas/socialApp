import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Chatdata from '../sharedcomponent/Chatdata';

class Headermenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      headerMenu: false,
      requestData: [],
    }
  }

  componentDidMount() {

    for (let i = 0; i < 10; i++) {
      this.state.requestData.push({
        key: i.toString(),
        fPic: require(`../assets/images/user.jpg`),
        name: `Waqas ${i}`,
        dis: `Lorem Ipsum is simply dummy text. ${i}`,
      })
    }
    this.setState({ requestData: this.state.requestData });

    document.addEventListener('click', this.menuClickOutside, true);

  }

  componentWillUnmount() {
    document.removeEventListener('click', this.menuClickOutside, true);
  }

  menuClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        headerMenu: false
      });
    }
  }

  headerMenuOpen(headerMenuType) {
    if (this.state.headerMenu === headerMenuType) {
      this.setState({ headerMenu: null })
    }
    else {
      this.setState({ headerMenu: headerMenuType })
    }
  }


  render() {
    return (
      <div className="headerMenuMain">
        <div onClick={() => this.headerMenuOpen("menuList1")} className="headerMenu"><span>8</span>
          <i><NotificationsActiveOutlinedIcon fontSize="small" /></i></div>
        {this.state.headerMenu === 'menuList1' ?
          <div className="headerMenuDetailBox">
            <h1>Notifications</h1>
            <Scrollbars style={{ height: 300 }}>
              <ul>
                {this.state.requestData.map((item, key) => {
                  return (
                    <li key={key.toString()}>
                      <a href='#_'>
                        <img src={item.fPic} alt="" />
                        <p>{item.name}<span>{item.dis}</span></p>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </Scrollbars>
          </div>
          : null}
        <div onClick={() => this.headerMenuOpen("menuList2")} className="headerMenu"><span>15</span>
          <i><MarkEmailReadOutlinedIcon fontSize="small" /></i></div>
        {this.state.headerMenu === 'menuList2' ?
          <div className="headerMenuDetailBox">
            <h1>Messages</h1>
            <Scrollbars style={{ height: 300 }}>
              <ul>
                {Chatdata.map((item, key) => {
                  return (
                    <li key={key.toString()}>
                      <a onClick={() => this.props.openCloseChatById(item.id)}>
                        <img src={item.chatUserPhoto} alt="" />
                        <p>{item.chatUserName}<span>{item.chatUserDescription}</span></p>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </Scrollbars>
          </div>
          : null}
        <div onClick={() => this.headerMenuOpen("menuList3")} className="headerMenu"><span>6</span>
          <i><PeopleAltOutlinedIcon fontSize="small" /></i></div>
        {this.state.headerMenu === 'menuList3' ?
          <div className="headerMenuDetailBox">
            <h1>Friend Request</h1>
            <Scrollbars style={{ height: 300 }}>
              <ul>
                {this.state.requestData.map((item, key) => {
                  return (
                    <li key={key.toString()}>
                      <a href='#_'>
                        <img src={item.fPic} alt="" />
                        <p>{item.name}<span>{item.dis}</span></p>
                        <a href='#_' className='fReqBtn'>Accept</a>
                        <a href='#_' className='fReqBtn'>Decline</a>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </Scrollbars>
          </div>
          : null}
      </div>
    );
  }
}

export default Headermenu;



