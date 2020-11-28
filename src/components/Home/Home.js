import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
            <main className="main-home-content">
                <div class="tile is-parent tile-margin">
                    <article class="tile is-child tile-cambridge-blue">
                        <p class="title">Meu Político</p>
                        <p class="subtitle">O termômetro da honestidade</p>
                    </article>
                </div>
                <div class="tile is-parent tile-margin pitch">
                    <article class="tile is-child tile-cambridge-blue pitch-text">
                        <p class="subtitle">Se ao menos a gente pudesse contar as mentiras desses políticos... poderíamos 
                        fazer com que  nos contem novas mentiras! Ou de repente… serem honestos, mas essa última proposta 
                        como diriam os políticos, é muito radical. O Meu Político é uma plataforma que chega para preencher 
                        essa lacuna, e você pode fazer parte disso! Composto completamente por voluntários, queremos 
                        construir um “dossiê de mentiras” para os políticos do Brasil.</p>
                        <Link to="/sobre" className="button button-light-blue-home">Conheça o Projeto!</Link>
                    </article>
                </div>
                <div className="register-group">

                </div>
            </main>
    )
}

export default Home;