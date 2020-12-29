import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = ({showSignup, setShowSignup, authState}) => {
    console.log(window.outerWidth)
    return (
        <>
            <main className="main-home-content d-flex flex-column justify-content-between">
                <div className={window.innerWidth >= 1920 ? 
                    "cambridge-blue-background d-flex flex-column align-items-center w-75 h-25 justify-content-center shadow align-self-center mt-4 jumbotron"
                    : "jumbotron align-self-center cambridge-blue-background w-75 d-flex flex-column align-items-center h-25"}>
                    <p className={window.innerWidth === 1920 ? "font-weight-bold display-3" : "font-weight-bold h2"}>Meu Político</p>
                    <p className={window.innerWidth === 1920 ? "h2" : "h6"} >O termômetro da honestidade</p>
                </div>
                {window.innerWidth >= 720 ? <div className="cambridge-blue-background d-flex flex-column shadow align-items-center custom-jumbo justify-content-center w-75 align-self-center jumbotron">
                        <p className="lead blockquote text-center">Se ao menos a gente pudesse contar as mentiras desses políticos... poderíamos 
                        fazer com que  nos contem novas mentiras! Ou de repente… serem honestos, mas essa última proposta 
                        como diriam os políticos, é muito radical. O Meu Político é uma plataforma que chega para preencher 
                        essa lacuna, e você pode fazer parte disso! Composto completamente por voluntários, queremos 
                        construir um “dossiê de notícias” para os políticos do Brasil.</p>
                        <Button as={Link} to="/sobre" className="mt-3 btn button-light-blue-home btn-lg">Conheça o Projeto!</Button>
                </div> : false}
                <div className="cambridge-blue-background d-flex flex-column shadow align-items-center w-50 justify-content-center align-self-center participate jumbotron">
                        <p className="h1 mb-3">Participe!</p>
                        {authState ? <Container className="w-50 d-flex justify-content-center">
                            <Link to="/" className="btn btn-lg button-ultra-red">
                                Seja um voluntário
                            </Link>
                        </Container> : <Container className="d-flex justify-content-between w-50">
                            <Link to="/" className="btn btn-lg button-ultra-red">
                                Seja um voluntário
                            </Link>
                            <button onClick={() => setShowSignup(true)} className="btn btn-lg button-light-blue-home" >
                                Crie uma conta
                            </button>
                        </Container>}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home;