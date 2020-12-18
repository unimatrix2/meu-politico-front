
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, ListGroup, Jumbotron, Button } from 'react-bootstrap';
import api from '../../services/api.service';
import { statusSwitch } from '../../utils/statusStyling';
import EditPolitico from '../Forms/EditPolitico';
import './Noticia.css';

const Politico = (props) => {
    const { id } = useParams();
    const [show, setShow] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [currentPoliticos, setCurrentPoliticos] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        if (currentPoliticos.length < 1) {
            api.get(`${process.env.REACT_APP_API_BASE_URL}/politicos/lista/${id}`)
                .then(data => {
                    setCurrentPoliticos(data.data);
                    setNews(data.data.news);
                })
                .catch(err => console.log(err));
        }

        if (updated) {
            api.get(`${process.env.REACT_APP_API_BASE_URL}/politicos/lista/${id}`)
                .then(data => {
                    setCurrentPoliticos(data.data);
                    setNews(data.data.news);
                    setUpdated(false);
                })
                .catch(err => console.log(err));
        }
    })
    return (
        <Container style={{marginTop: 20}}>
            <Jumbotron className="detail-jumbo d-flex flex-column border-jumbo">
                <h1>{currentPoliticos.fullName}</h1>
                <img src={currentPoliticos.imageURL} alt={currentPoliticos.fullName} style={{width: 105, marginRight: 15, marginBottom: 10}}/>
                <p>Status: <span className={statusSwitch(currentPoliticos.status)}>{currentPoliticos.status}</span></p>
                <p>Estado: <span className={statusSwitch(currentPoliticos.province)}>{currentPoliticos.province}</span></p>
                <p>Posição atual: <span className={statusSwitch(currentPoliticos.currentPosition)}>{currentPoliticos.currentPosition}</span></p>
                <p>Última posição: <span className={statusSwitch(currentPoliticos.lastPosition)}>{currentPoliticos.lastPosition}</span></p>
                {props.authed ? <Button
                className="modal-btn-custom-login align-self-end"
                onClick={() => setShow(true)}
                >
                <i className="far fa-edit"></i> Editar
                </Button> : false}
                <br></br>
                <ListGroup>
                    <ListGroup.Item className="detail-jumbo">
                        Notícias:
                            {news.map(ne => {
                                return (
                                            <ListGroup key={ne._id}>
                                                <ListGroup.Item className="d-flex align-items-center custom-list">
                                                    <div style={{lineHeight: 1}}>
                                                        <p>{ne.headline}</p>
                                                    </div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                )
                            })}
                    </ListGroup.Item>
                    <ListGroup.Item className="detail-jumbo">
                        Fonte Oficial:
                        <ListGroup className="custom-list p-3">
                        <span>{currentPoliticos.officialInfoURL}</span>
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </Jumbotron>
            {props.authed ? <EditPolitico
                pol={currentPoliticos}
                news={news}
                show={show}
                setUpdated={setUpdated}
                onHide={() => setShow(false)} /> : false} 
        </Container>

    )
}

export default Politico;