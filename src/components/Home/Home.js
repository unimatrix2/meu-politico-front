import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Container, Image } from 'react-bootstrap';
import './Home.css';
import danny from './images/perfil-danny.jpeg';
import cynthia from './images/perfil-cynthia.jpeg';

const Home = () => {
    return (
        <>
            <main className="main-home-content">
                <Jumbotron className="cambridge-blue-background d-flex flex-column align-items-center w-75 h-25 justify-content-center shadow align-self-center mt-4 ">
                    <h1 className="font-weight-bold display-3">Meu Político</h1>
                    <p className="h2" >O termômetro da honestidade</p>
                </Jumbotron>
                <Jumbotron className="cambridge-blue-background d-flex flex-column shadow align-items-center custom-jumbo justify-content-center">
                        <p className="lead blockquote text-center">Se ao menos a gente pudesse contar as mentiras desses políticos... poderíamos 
                        fazer com que  nos contem novas mentiras! Ou de repente… serem honestos, mas essa última proposta 
                        como diriam os políticos, é muito radical. O Meu Político é uma plataforma que chega para preencher 
                        essa lacuna, e você pode fazer parte disso! Composto completamente por voluntários, queremos 
                        construir um “dossiê de mentiras” para os políticos do Brasil.</p>
                        <Button as={Link} to="/sobre" className="mt-3 btn button-light-blue-home btn-lg">Conheça o Projeto!</Button>
                </Jumbotron>
                <Jumbotron className="cambridge-blue-background d-flex flex-column shadow align-items-center w-50 justify-content-center align-self-center participate">
                        <p className="h1 mb-3">Participe!</p>
                        <Container className="d-flex justify-content-between w-50">
                            <Button as={Link} to="/" className="btn btn-lg button-ultra-red">
                                Seja um voluntário
                            </Button>
                            <Button as={Link} to="/" className="btn btn-lg button-light-blue-home" >
                                Crie uma conta
                            </Button>
                        </Container>
                </Jumbotron>
                <br></br><br></br>
                <p className="h5 text-center">
                    Últimas notícias registradas: (Terá um componente exibindo as últimas 10 notícias registradas)
                </p>
            </main>
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
        </>
    )
}

export default Home;