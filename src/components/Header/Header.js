import React from 'react';
import './Header.css';

// avatar
import avatar from '../../assets/avatar.jpg';

// stateless function
function Header() {
  return (
    <nav className="navbar__menu">
      <div className="navbar__menu-col">
        <a className="navbar__menu--brand" href>Startup<span>Istanbul</span></a>
        <a className="navbar__menu--item" href>Home</a>
        <a className="navbar__menu--item" href>Profile</a>
      </div>
      <div className="navbar__menu-col navbar__profile">
        <p>Jesus Sandrea</p>
        <img src={ avatar } alt="Profile Face"/>
      </div>
    </nav>
  )
}

export default Header;