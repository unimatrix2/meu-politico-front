import React, { useState, useEffect } from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../../services/api.service';
import { statusSwitch } from '../../../utils/statusStyling';
import './NoticiaTable.css';

const PoliticoTable = () => {
    const [userNoticias, setUserNoticias] = useState([]);
    useEffect(() => {
        if (userNoticias.length < 1) {
            api.get(`${process.env.REACT_APP_API_BASE_URL}/noticias/privado/lista`)
                .then(data => setUserNoticias(data.data))
                .catch((error) => console.log(error));
        }
    })

    return (
        <Container>
            {userNoticias.map(noticia => {
        return (
            <Card key={noticia._id} className="custom-link" as={Link} to={`/noticia/${noticia._id}`}>
                <Card.Header as="h4">{noticia.headline}</Card.Header>
                <Card.Body>
                    <Card.Title>{noticia.introduction}</Card.Title>
                    <br></br>
                    <Card.Subtitle>Categoria: <span className={statusSwitch(noticia.category)}>{noticia.category}</span></Card.Subtitle>
                    <br></br>
                    <Card.Text>Status: <span className={statusSwitch(noticia.status)}>{noticia.status}</span></Card.Text>
                    <Card.Text>
                        Fontes: 
                    </Card.Text>
                    <ListGroup>
                        {noticia.sources.map((src, idx) => <ListGroup.Item key={idx} className="sauce-list">{src}</ListGroup.Item>)}
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    })}
        </Container>
    )
}

export default PoliticoTable