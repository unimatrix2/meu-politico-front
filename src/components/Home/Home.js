import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <>
            <main className="main-home-content">
                <div className="tile is-parent home-tile">
                    <article className="tile is-child tile-cambridge-blue">
                        <p className="title">Meu Político</p>
                        <p className="subtitle">O termômetro da honestidade</p>
                    </article>
                </div>
                <div className="tile is-parent home-tile pitch">
                    <article className="tile is-child tile-cambridge-blue pitch-text">
                        <p className="subtitle">Se ao menos a gente pudesse contar as mentiras desses políticos... poderíamos 
                        fazer com que  nos contem novas mentiras! Ou de repente… serem honestos, mas essa última proposta 
                        como diriam os políticos, é muito radical. O Meu Político é uma plataforma que chega para preencher 
                        essa lacuna, e você pode fazer parte disso! Composto completamente por voluntários, queremos 
                        construir um “dossiê de mentiras” para os políticos do Brasil.</p>
                        <Link to="/sobre" className="button button-light-blue-home">Conheça o Projeto!</Link>
                    </article>
                </div>
                <div className="tile is-parent home-tile">
                    <article className="tile is-child tile-cambridge-blue">
                        <p className="title">Participe!</p>
                        <Link to="/" className="button button-ultra-red mr-6">
                            Seja um voluntário
                        </Link>
                        <Link to="/" className="button button-light-blue-home" >
                            Crie uma conta
                        </Link>
                    </article>
                </div>
                <br></br><br></br>
                <p className="title has-text-centered">
                    Últimas notícias registradas:
                </p>
            </main>
            <footer className="custom-footer is-flex">
            <div className="is-flex">
                <p className="title is-5">
                    Desenvolvido por:
                <a href="https://github.com/unimatrix2" className="subtitle is-6 pl-5 custom-anchor" target="_blank" rel="noreferrer">Danny Nisenbaum</a>
                </p>
                <span style={{marginLeft: 4}}>como projeto do Módulo 3 do curso de Desenvolvimento Web na
                    <a className="subtitle is-6 custom-ironhack" href="https://www.ironhack.com/br" target="_blank" rel="noreferrer">
                    Ironhack
                    </a>
                </span>
            </div>
            </footer>
        </>
    )
}

export default Home;