import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, ListGroup, Jumbotron } from 'react-bootstrap';
import api from '../../services/api.service';
import { statusSwitch } from '../../utils/statusStyling';

const Noticia = () => {
    const { id } = useParams();
    const [currentNews, setCurrentNews] = useState([]);
    const [politicos, setPoliticos] = useState([]);
    const [sources, setSources] = useState([]);
    useEffect(() => {
        if (currentNews.length < 1) {
            api.get(`${process.env.REACT_APP_API_BASE_URL}/noticias/lista/${id}`)
                .then(data => {
                    setCurrentNews(data.data);
                    setPoliticos(data.data.politicos);
                    setSources(data.data.sources);
                })
                .catch(err => console.log(err));
        }
    })
    console.log(politicos[0])
    return (
        <Container style={{marginTop: 20}}>
            <Jumbotron>
                <h1>{currentNews.headline}</h1>
                <p>{currentNews.introduction}</p>
                <p>Status: <span className={statusSwitch(currentNews.status)}>{currentNews.status}</span></p>
                <p>Categoria: <span className={statusSwitch(currentNews.category)}>{currentNews.category}</span></p>
                <br></br>
                <ListGroup>
                    <ListGroup.Item>
                        Políticos envolvidos:
                            {politicos.map(pol => {
                                return (
                                            <ListGroup>
                                                <ListGroup.Item className="d-flex align-items-center">
                                                    <img src={pol.imageURL} alt={pol.fullName} style={{width: 105, marginRight: 15, marginBottom: 10}}/>
                                                    <div style={{lineHeight: 1}}>
                                                        <p>{pol.fullName}</p>
                                                        <p>Posição atual: {pol.currentPosition}</p>
                                                        <p>Última posição: {pol.lastPosition === 'Outro/Não Sei' ? 'Outro' : pol.lastPosition}</p>
                                                        <p>Estado: {pol.province}</p>
                                                    </div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                )
                            })}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Fontes Disponíveis:
                        <ListGroup>
                            {sources.map(sauce => <ListGroup.Item>{sauce}</ListGroup.Item>)}
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </Jumbotron>
        </Container>

    )
}

export default Noticia;