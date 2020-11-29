import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const About = ({isFaq}) => {
    return !isFaq ? (
            <main className="main-home-content">
            <div className="container d-flex flex-column">
                <br></br>
                <h1 className="display-4 font-weight-bold text-center">Bem Vindo(a) ao Meu Político!</h1>
                <h2 className="h2 text-center">
                    Meu Político é um serviço que foi criado com a intenção de agregar notícias e checagens sobre 
                    ações e discursos de políticos de todo o país.
                </h2>
                <br></br>
                <p className="h5 text-justify">
                Considerando a proporção que as “fake news” tomaram não somente no Brasil mas em diversos lugares 
                do mundo, todo nosso entendimento da realidade foi alterado e ficou especialmente difícil distinguir 
                as coisas no nebuloso campo da política. Não é novidade que nesse assunto (política), a mentira sempre 
                foi uma carta na manga, e é uma ótima carta! Pode ser um blefe, um flush ou até um Quatro de Paus. Em 
                época de eleições então, uma mentira pode até mudar o rumo da eleição. Infelizmente, não há regras, ao 
                menos regras que sejam aplicadas e reforçadas, sobre o que um candidato pode ou não pode falar em um 
                debate, um discurso, comício ou propaganda. Temos agências de checagem, jornalistas e diversos veículos 
                que tentam reduzir os danos, mas hoje as mentiras circulam muito mais rápido que a nossa capacidade de 
                desmascará-las.
                </p>
                <br></br>
                <p className="h5 text-justify">
                Se ao menos a gente pudesse contar as mentiras desses políticos... poderíamos fazer com que  nos contem 
                novas mentiras! Ou de repente… serem honestos, mas essa última proposta como diriam os políticos, é muito 
                radical. O Meu Político é uma plataforma que chega para preencher essa lacuna, e você pode fazer parte 
                disso! Composto completamente por voluntários, queremos construir um “dossiê de mentiras” para os 
                políticos do Brasil.
                </p>
                <br></br>
                <p className="h5 text-justify">
                Já pensou em poder averiguar o que um político está falando em questão de segundos? Imagina então, todos 
                os candidatos de um debate podendo flagrar mentiras antes mesmo da réplica? Essa é a nossa proposta: 
                retirar a cortina de fumaça para avaliar o que nossos políticos falam e fazem (ou deixam de fazer). 
                Funciona assim:
                </p>
                <br></br>
                <p className="h5 text-justify">
                Você procura um político e receberá notícias sobre ele ou ela. Cada notícia possui uma categoria que pode 
                ser positiva, negativa, corrupção, promessa cumprida e promessa descumprida, assim fica mais fácil saber 
                do que se trata o assunto. Quando não existir um político que você conhece ou quer saber mais sobre, você 
                pode adicionar na plataforma, bem como adicionar notícias sobre esse político, e outras fontes da mesma notícia.
                </p>
                <br></br>
                <div className="d-flex w-50 justify-content-between align-self-center">
                    <Button as={Link} to="/faq" className="btn btn-lg button-light-blue-home">Perguntas Frequentes</Button>
                    <Button as={Link} to="/" className="btn btn-lg button-light-blue-home">Voltar para o Início</Button>
                </div>
            </div>
            </main>
    ) : (
        <main className="main-home-content">
            <div className="container d-flex flex-column">
                <br></br>
                <h1 className="display-4 font-weight-bold text-center">Perguntas Frequentes</h1>
                <br></br>
                <p className="h3 text-justify">
                    <strong>Como controlamos a qualidade da informação? Não seria muito fácil adicionar um político que não existe ou uma 
                notícia falsa sobre alguém?</strong>
                </p>
                <p className="h5 text-justify">
                Há duas respostas: sim e não. A plataforma conta com um sistema de aprovação para 
                qualquer informação, nossos voluntários são responsáveis por verificar todas as notícias e políticos, mas 
                acreditamos em transparência e portanto, disponibilizamos tudo sempre. Mas não se preocupe! Sempre que buscar 
                um político ou uma notícia, o status de verificação também está lá! E para cadastrar um político em nossa 
                plataforma é obrigatório provêr alguma fonte oficial sobre a pessoa, preferencialmente do TSE (Tribunal 
                Superior Eleitoral) ou outros órgãos públicos.
                </p>
                <br></br>
                <p className="h3 text-justify">
                    <strong>E sobre diversidade de fontes? Vocês ganham de alguém para promover órgãos de imprensa?</strong>
                </p>
                <p className="h5 text-justify">
                Nós não recebemos qualquer ajuda ou doação que não seja da campanha de financiamento coletivo mantida por nossos 
                usuários, voluntários e seguidores. Em questão de diversidade de fontes, o Meu Político possui um sistema único que 
                agrega diversas fontes da mesma notícia. Geralmente a primeira manchete registrada é a que constará no título, salvo 
                em casos em que nossos voluntários acreditem se tratar de uma manchete que distorce o conteúdo da notícia. Assim, 
                para cada notícia, você terá acesso a várias publicações registradas na plataforma sobre o mesmo fato, e você sempre 
                poderá adicionar mais publicações na mesma notícia. Possuímos no entanto um código de ética que nos obriga a omitir 
                veículos que possuam frequentes condenações, ordens judiciais ou menções em agências de checagem por espalharem “fake 
                news”, uma vez que não temos como garantir a qualidade da informação desses veículos.
                </p>
                <br></br>
                <Button as={Link} to="/" className="btn btn-lg button-light-blue-home" style={{alignSelf: "center"}}>
                    Voltar ao Início
                </Button>
            </div>
        </main>
    )
}

export default About;