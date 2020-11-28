import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
            <main className="main-home-content">
                <div class="tile is-parent home-tile">
                    <article class="tile is-child tile-cambridge-blue">
                        <p class="title">Meu Político</p>
                        <p class="subtitle">O termômetro da honestidade</p>
                    </article>
                </div>
                <div class="tile is-parent home-tile pitch">
                    <article class="tile is-child tile-cambridge-blue pitch-text">
                        <p class="subtitle">Se ao menos a gente pudesse contar as mentiras desses políticos... poderíamos 
                        fazer com que  nos contem novas mentiras! Ou de repente… serem honestos, mas essa última proposta 
                        como diriam os políticos, é muito radical. O Meu Político é uma plataforma que chega para preencher 
                        essa lacuna, e você pode fazer parte disso! Composto completamente por voluntários, queremos 
                        construir um “dossiê de mentiras” para os políticos do Brasil.</p>
                        <Link to="/sobre" className="button button-light-blue-home">Conheça o Projeto!</Link>
                    </article>
                </div>
                <div class="tile is-parent home-tile">
                    <article class="tile is-child tile-cambridge-blue">
                        <p class="title">Participe!</p>
                        <Link className="button button-ultra-red mr-6">
                            Seja um voluntário
                        </Link>
                        <Link className="button button-light-blue-home" >
                            Crie uma conta
                        </Link>
                    </article>
                </div>
                <br></br><br></br>
                <p className="title has-text-centered">
                    Últimas notícias registradas:
                </p>
            </main>
    )
}

export default Home;