import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import SignupModal from '../Auth/Signup/SignupModal';
import LoginModal from '../Auth/Login/LoginModal';
import './Navbar.css';

const NavigationBar = ({
    isUserAuthed,
    showSignup,
    setShowSignup,
    showLogin,
    setShowLogin,
    }) => {
    return (
        <Navbar expand="lg" className="is-honeydew sticky-top shadow-sm">
            <Navbar.Brand as={Link} to="/" className="font-weight-bolder">MeuPolítico</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
                    <Nav.Link as={Link} to="/faq">Perguntas Frequentes</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {isUserAuthed ? <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as:
                </Navbar.Text>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
            : <Navbar.Collapse className="flex-row justify-content-end">
            <Nav>
                <Nav.Item className="mr-2">
                    <Button className="button-opal btn-lg" onClick={() => setShowSignup(true)}>Cadastrar</Button>
                </Nav.Item>
                <Nav.Item>
                    <Button className="button-cambridge-blue btn-lg" onClick={() => setShowLogin(true)}>Entrar</Button>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>}
            <SignupModal
                show={showSignup}
                onHide={() => setShowSignup(false)}
                setSignupState={setShowSignup}
                setLoginState={setShowLogin} />
            <LoginModal show={showLogin} onHide={() => setShowLogin(false)} />
        </Navbar>
    )
}

export default NavigationBar;