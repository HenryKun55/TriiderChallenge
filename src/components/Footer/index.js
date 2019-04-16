import React from "react";

import logo from '../../assets/logo.png'

import './styles.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contentFooter">
        <img className="logoFooter" width="80" height="20" alt="Triider Logo" src={logo}></img>
      </div>
    </footer>
  );
}

export default Footer;