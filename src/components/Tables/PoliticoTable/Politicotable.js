import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import api from '../../../services/api.service';
import { statusSwitch } from '../../../utils/statusStyling';
import './PoliticoTable.css';

const PoliticoTable = () => {
    const [userPoliticos, setUserPoliticos] = useState([]);
    useEffect (() => {
        if (userPoliticos.length < 1) {
        api.get(`${process.env.REACT_APP_API_BASE_URL}/politicos/privado/lista`)
            .then(data => setUserPoliticos(data.data))
            .catch((error) => console.log(error));  
        }
    })  

    return (    
        <Container className="d-flex flex-wrap justify-content-center form-container">
            {userPoliticos.map(politicos => {
        return (
            <Card key={politicos._id} className="custom-link mr-5" as={Link} to={`/politico/${politicos._id}`} style={{ width: '18rem' }}>
                <Card.Header as="h4">{politicos.fullName}</Card.Header>
                <Card.Img  className="mx-auto" variant="top" src={politicos.imageURL} style={{ width: '10rem' }}/>
                <Card.Body> 
                    <Card.Subtitle className="mb-2 text-muted">{politicos.province}</Card.Subtitle>
                        <Card.Text> Status: <span className={statusSwitch(politicos.status)}>{politicos.status}</span></Card.Text>
                </Card.Body>
            </Card>
        )
    })}
        </Container>
    )
};

export default PoliticoTable