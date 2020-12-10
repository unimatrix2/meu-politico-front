import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import SignupModal from '../Auth/Signup/SignupModal';
import LoginModal from '../Auth/Login/LoginModal';
import { remove } from '../../utils/localStorage.utils';
import './Navbar.css';

const NavigationBar = ({
    authState,
    setAuthState,
    showSignup,
    setShowSignup,
    showLogin,
    setShowLogin,
    currentUser
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
                {authState ? <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title={currentUser ? currentUser : 'default'} alignRight >
                        <NavDropdown.Item as={Link} to="/privado/usuario/politicos">Meus Políticos</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/privado/usuario/noticias">Minhas Notícias</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/conta">Minha Conta</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => {remove(); setAuthState(false);}} >Sair</NavDropdown.Item>
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
                {!authState ? <><SignupModal
                    show={showSignup}
                    onHide={() => setShowSignup(false)}
                    setSignupState={setShowSignup}
                    setLoginState={setShowLogin}
                />
                <LoginModal
                    show={showLogin}
                    onHide={() => setShowLogin(false)}
                    setAuthState={setAuthState}
                /> </> : false}
        </Navbar>
    )
}

export default NavigationBar;