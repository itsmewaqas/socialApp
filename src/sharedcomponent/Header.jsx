import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/images/logo.png';
import Headermenu from '../sharedcomponent/Headermenu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useHistory } from "react-router-dom";

import cUserImg from '../assets/images/user.jpg';

function Header({ openCloseChatById }) { 

  const [menuState, menuStateSet] = useState(false);

  let history = useHistory();

  // menu click outside menu hide code start
  const catMenu = useRef(null);
  const closeOpenMenus = (e) => {
    if (catMenu.current && menuState && !catMenu.current.contains(e.target)) {
      menuStateSet(false)
    }
  }
  document.addEventListener('mousedown', closeOpenMenus);
  // menu click outside menu hide code end

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      history.push('/Searchpage');
    }
  }

  function logout() { 
    history.push('/Login');
    localStorage.clear();
  }
  
  useEffect(() => {
  }, []);

  return (
    <div className="dashHeader">
      <div className="logoArea">
        <a className="logo"><img src={Logo} /></a>
      </div>
      <div className='searchBlock'>
        <i> <PersonSearchOutlinedIcon /></i>
        <input type="text" className='searchBlockInput' name=''
          onKeyPress={(e) => handleKeyPress(e)}
          placeholder='Search Friend' />
      </div>
      <div className='headerMneuBtnMain' ref={catMenu}> 
        <div onClick={() => menuStateSet(!menuState)} className='headerMneuBtn'><KeyboardArrowDownIcon fontSize="large" color="secondary" /></div>
        {menuState && (
          <div className='headerMneuBtnBox'>
            <a onClick={(e) => { history.push('/User') }}>
              <a className='menuProfile' onClick={() => menuStateSet(!menuState)}><img src={cUserImg} alt="" /><p>waqas<span>See Your Profile</span></p></a>
            </a>
            <ul>
              <li onClick={() => menuStateSet(!menuState)}><a onClick={(e) => { history.push('/') }}><HomeOutlinedIcon fontSize="medium" />Home</a></li>
              <li onClick={() => menuStateSet(!menuState)}><a onClick={(e) => { history.push('/Findpartner') }}><PersonSearchOutlinedIcon fontSize="medium" />Find Partner</a></li>
              <li onClick={() => menuStateSet(!menuState)}><a onClick={(e) => { history.push('/User') }}><AccountBoxOutlinedIcon fontSize="medium" />Profile</a></li>
              <li onClick={() => menuStateSet(!menuState)}><a onClick={(e) => { history.push('/Settings') }}><SettingsOutlinedIcon fontSize="medium" />Settings</a></li>
              <li onClick={() => menuStateSet(!menuState)}><a onClick={() => logout()}><ExitToAppOutlinedIcon fontSize="medium" />Logout</a></li>
            </ul>
          </div>
        )}
      </div>
      <Headermenu openCloseChatById={openCloseChatById} />
    </div >
  );
}

export default Header;