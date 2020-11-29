import React from 'react';
import { Image } from 'react-bootstrap';
import danny from './images/perfil-danny.jpeg';
import cynthia from './images/perfil-cynthia.jpeg';

const Footer = () => {
    return (
        <footer className="page-footer font-small honeydew-background border-top shadow">
            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3"> 
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <br></br><br></br><br></br>
                        <p className="h5 text-justify">
                            Desenvolvido por <strong>Danny Nisenbaum</strong> e <strong>Cynthia Takiishi</strong> como projeto do Módulo 3 do curso de Desenvolvimento Web da Ironhack.
                        </p>
                    </div>    
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Danny Nisenbaum</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
                        <a href="https://github.com/unimatrix2" target="_blank" rel="noreferrer">
                            <Image src={danny} alt="perfil" roundedCircle style={{width: 200}} className="shadow-lg"/>
                        </a>
                    </div>   
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Cynthia Takiishi</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
                        <a href="https://github.com/ctakiishi" target="_blank" rel="noreferrer">
                            <Image src={cynthia} style={{width: 200}} roundedCircle className="shadow-lg"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;