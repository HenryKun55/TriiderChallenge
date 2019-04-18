import React from 'react';

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import logo from '../../assets/logo.png'

import './styles.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="headerFooter">
      <Container bsPrefix="containerFooter">
        <Row bsPrefix="rowFooter">
          <Col bsPrefix="colFooter">
            <div className="cardFooter">
              <div className="cardFooter-header-first-colorOne">E SE ALGO&nbsp;</div>
              <div className="cardFooter-header-first-colorTwo">DER ERRADO ?</div>
              <div className="cardFooter-content-first"> Conte com a nossa garantia contra danos de até R$5.000,00. </div>
              <div className="cardFooter-footer-first">
                <a className="linkHeaderFooter" href="#a"> SAIBA MAIS</a>
              </div>
            </div>
          </Col>
          <Col bsPrefix="colFooter">
            <div className="cardFooter">
              <div className="cardFooter-line">
                <div className="cardFooter-header-colorOne">PROFISSIONAIS&nbsp;</div>
                <div className="cardFooter-header-colorTwo">VERIFICADOS</div>
                <div className="cardFooter-content"> Verificamos <b>antecedentes criminais</b>, referências profissionais e muito mais.  </div>
              </div>
              <div className="cardFooter-footer">
                <a className="linkHeaderFooter" href="#b"> SAIBA MAIS</a>
              </div>
            </div>
          </Col>
          <Col bsPrefix="colFooter">
            <div className="cardFooter">
              <div className="cardFooter-line">
                <div className="cardFooter-header-colorOne">PAGAMENTO&nbsp;</div>
                <div className="cardFooter-header-colorTwo">NA PLATAFORMA</div>
                <div className="cardFooter-content"> Pague em até 6x no seu cartão de crédito direto no app ou no site!</div>
              </div>
              <div className="cardFooter-footer">
                <a className="linkHeaderFooter" href="#c"> SAIBA MAIS</a>
              </div>
            </div>
          </Col>
          <Col bsPrefix="colFooter-last">
            <div className="cardFooter">
              <div className="cardFooter-line">
                <div className="cardFooter-header-colorOne">CENTRAL DE&nbsp;</div>
                <div className="cardFooter-header-colorTwo">AJUDA</div>
                <div className="cardFooter-content"> Te ajudamos antes, durante ou depois do seu pedido 24 horas por dia. </div>
              </div>
              <div className="cardFooter-footer">
                <a className="linkHeaderFooter" href="#d"> SAIBA MAIS</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
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