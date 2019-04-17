import React, {Component} from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

import { LinkContainer } from 'react-router-bootstrap'

import styles from './styles'
import './styles.css'

import logo from '../../assets/logo.png'

export default class NavBar extends Component {

    state = {
        username: 'Juliana'
    }

    render() {
        return (
        <Navbar style={styles.nav} collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
            <Nav style={styles.navLeft}>
                <Navbar.Toggle style={styles.navToogle} aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="#home">
                    <LinkContainer to="/"><img className="logo" style={styles.navLogo} src={logo} width="100" height="25" alt="Triider Logo" /></LinkContainer>
                </Navbar.Brand>
            </Nav>
            <Navbar.Collapse className="mr-auto" id="responsive-navbar-nav" style={styles.navCollapse}>
                <LinkContainer to="/"><Nav.Link>Início</Nav.Link></LinkContainer>
                <LinkContainer to="/services" ><Nav.Link >Catálogo de serviços</Nav.Link></LinkContainer>
                <Nav.Link >Meus orçamentos</Nav.Link>
                <Nav.Link >Mensagens</Nav.Link>
                <Nav.Link >Ajuda</Nav.Link>
            </Navbar.Collapse>
            <Dropdown style={styles.dropDown}>
                <Dropdown.Toggle split style={styles.dropButton} id="dropdown-basic">
                    <img alt="logo" style={styles.img} src={logo} width="50" height="25" ></img>
                    {this.state.username}
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Navbar>
        )
    }
}
  
