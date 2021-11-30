import React from 'react'
import  HeaderLogo   from './HeaderLogo';
import  SearchBar  from './SearchBar';
import  NavBar  from './NavBar';
import  UserProfile  from './UserProfile';
import './HeaderNav.scss';

  function Header() {
  return (
    <div className="topHeader">
        <div className="HeaderLogoCont"> 
          <HeaderLogo/>
          <SearchBar/>
        </div>
        <div className="NavCont">
          <NavBar/>
        </div>
        <div className="SignIn">
          <UserProfile />
        </div>
    </div>
  )
}

export default Header;
