import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, ListGroup, Jumbotron, Button } from 'react-bootstrap';
import api from '../../services/api.service';
import { statusSwitch } from '../../utils/statusStyling';
import EditNoticia from '../Forms/EditNoticia';
import './Noticia.css';

const Noticia = (props) => {
    const { id } = useParams();
    const [show, setShow] = useState(false);
    const [updated, setUpdated] = useState(false);
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
        if (updated) {
            api.get(`${process.env.REACT_APP_API_BASE_URL}/noticias/lista/${id}`)
                .then(data => {
                    setCurrentNews(data.data);
                    setPoliticos(data.data.politicos);
                    setSources(data.data.sources);
                    setUpdated(false);
                })
                .catch(err => console.log(err));
        }
    })
    return (
        <Container style={{marginTop: 20}}>
            <Jumbotron className="detail-jumbo d-flex flex-column border-jumbo">
                <h1>{currentNews.headline}</h1>
                <p>{currentNews.introduction}</p>
                <p>Status: <span className={statusSwitch(currentNews.status)}>{currentNews.status}</span></p>
                <p>Categoria: <span className={statusSwitch(currentNews.category)}>{currentNews.category}</span></p>
                {props.authed ? <Button
                className="modal-btn-custom-login align-self-end"
                onClick={() => setShow(true)}
                >
                <i className="far fa-edit"></i> Editar
                </Button> : false}
                <br></br>
                <ListGroup>
                    <ListGroup.Item className="detail-jumbo">
                        Políticos envolvidos:
                            {politicos.map(pol => {
                                return (
                                            <ListGroup key={pol._id}>
                                                <ListGroup.Item className="d-flex align-items-center custom-list">
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
                    <ListGroup.Item className="detail-jumbo">
                        Fontes Disponíveis:
                        <ListGroup>
                            {sources.map((sauce, idx) => <ListGroup.Item key={idx} className="custom-list">{sauce}</ListGroup.Item>)}
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </Jumbotron>
            {props.authed ? <EditNoticia
                news={currentNews}
                sources={sources}
                politicos={politicos}
                show={show}
                setUpdated={setUpdated}
                onHide={() => setShow(false)} /> : false}
        </Container>

    )
}

export default Noticia;