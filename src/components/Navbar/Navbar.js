import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, NavItem, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap';
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
    search,
    setSearch,
    showBar,
    setShowBar,
    currentSearchMethod,
    setCurrentSearchMethod,
    currentUser
    }) => {
        const history = useHistory();
        return (
            <Navbar expand="lg" className="is-honeydew sticky-top shadow-sm d-flex">
                <Navbar.Brand as={NavLink} onClick={() => {setShowBar(true) }} to="/" className="font-weight-bolder">MeuPolítico</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="mr-auto">
                    <Nav>
                        <Nav.Link as={NavLink} onClick={() => setShowBar(true)} to="/sobre">Sobre</Nav.Link>
                        <Nav.Link as={NavLink} onClick={() => setShowBar(true)} to="/faq">FAQ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {showBar ? <Navbar.Collapse>
                <InputGroup>
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            className="search-dropdown"
                            title={currentSearchMethod}
                            id="busca"
                        >
                            <Dropdown.Item as="button" onClick={() => setCurrentSearchMethod('Notícia') }>Notícia</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => setCurrentSearchMethod('Político') }>Político</Dropdown.Item>
                        </DropdownButton>
                        {currentSearchMethod === 'Selecione Busca' ? <FormControl
                        disabled
                        className="search-bar-field"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder={currentSearchMethod === 'Selecione Busca' ? "Buscar políticos ou notícias" : `Buscar ${currentSearchMethod}`}
                        ></FormControl> : <FormControl
                        className="search-bar-field"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder={currentSearchMethod === 'Selecione Busca' ? "Buscar políticos ou notícias" : `Buscar ${currentSearchMethod}`}
                        onKeyPress={event => { if (event.key === "Enter") { history.push("/busca"); setShowBar(false) } }}
                        ></FormControl>}
                        <InputGroup.Prepend>
                            <Button
                                as={Link}
                                variant="outline-secondary"
                                to="/busca"
                                className="search-submit-button"
                                onClick={() => setShowBar(false)}
                            >
                            Buscar
                            </Button>
                        </InputGroup.Prepend>
                    </InputGroup>
                </Navbar.Collapse> : false}
                {authState ? <Navbar.Collapse className="ml-auto justify-content-end">
                    <Nav>
                        <Nav.Link as={NavLink} onClick={() => setShowBar(true)} to="/politicos">Meus Políticos</Nav.Link>
                        <Nav.Link as={NavLink} onClick={() => setShowBar(true)} to="/noticias">Minhas Notícias</Nav.Link>
                    </Nav>
                    <NavDropdown as={NavItem} title={currentUser ? currentUser : 'default'} alignRight >
                        <NavDropdown.Item as={Link} onClick={() => setShowBar(true)} to="/politicos">Meus Políticos</NavDropdown.Item>
                        <NavDropdown.Item as={Link} onClick={() => setShowBar(true)} to="/noticias">Minhas Notícias</NavDropdown.Item>
                        <NavDropdown.Item as={Link} onClick={() => setShowBar(true)} to="/conta">Minha Conta</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => {remove(); setAuthState(false);}} >Sair</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
                : <Navbar.Collapse className="flex-row justify-content-end ml-auto">
                    <Nav>
                        <Nav.Item className="mr-2">
                            <Button className="button-opal" onClick={() => setShowSignup(true)}>Cadastrar</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button className="button-cambridge-blue" onClick={() => setShowLogin(true)}>Entrar</Button>
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