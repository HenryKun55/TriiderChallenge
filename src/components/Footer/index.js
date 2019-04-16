import React from 'react';
import Nav from 'react-bootstrap/Nav'

import logo from '../../assets/logo.png'

import './styles.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contentFooter">
        <div className="footerLeft">
          <img className="logoFooter" width="80" height="20" alt="Triider Logo" src={logo}></img>
        </div>
        <div className="footerRight" >
          <Nav className="footerNavRight">
            <Nav.Link className="linkFooter" >Central de Ajuda</Nav.Link>
            <Nav.Link className="linkFooter" >Termos de uso</Nav.Link>
            <Nav.Link className="linkFooter" >Código de conduta</Nav.Link>
          </Nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;