import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isUserAuthed }) => {
    return (
        <nav className="navbar is-honeydew" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo"/>
                </Link>

                <Link role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true">Sobre</span>
                    <span aria-hidden="true">Cadastrar</span>
                    <span aria-hidden="true">Entrar</span>
                </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/sobre" className="navbar-item about-item">
                        Sobre
                    </Link>
                    <Link to="/faq" className="navbar-item about-item">
                        Perguntas Frequentes
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button className="button button-light-blue">
                                <strong>Cadastrar</strong>
                            </button>
                            <button className="button button-cambridge-blue">
                                Entrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;