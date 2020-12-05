import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = ({showSignup, setShowSignup, authState}) => {
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
                        {authState ? <Container className="w-50 d-flex justify-content-center">
                            <Button as={Link} to="/" className="btn btn-lg button-ultra-red">
                                Seja um voluntário
                            </Button>
                        </Container> : <Container className="d-flex justify-content-between w-50">
                            <Button as={Link} to="/" className="btn btn-lg button-ultra-red">
                                Seja um voluntário
                            </Button>
                            <Button onClick={() => setShowSignup(true)} className="btn btn-lg button-light-blue-home" >
                                Crie uma conta
                            </Button>
                        </Container>}
                </Jumbotron>
                <br></br><br></br>
                <p className="h5 text-center">
                    Últimas notícias registradas: (Terá um componente exibindo as últimas 10 notícias registradas)
                </p>
            </main>
            <Footer />
        </>
    )
}

export default Home;