import React, { useState, useEffect } from 'react';
import api from '../../services/api.service';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { statusSwitch } from '../../utils/statusStyling';

const SearchResults = ({currentSearchMethod, setCurrentSearchMethod, search, setSearch}) => {
    const handleSearchMethod = () => {
            switch (currentSearchMethod) {
                case 'Notícia':
                    return 'noticias';
                case 'Político':
                    return 'politicos';
                default:
                    break;
            }
    }
    const [results, setResults] = useState([]);
    useEffect(() => {
        if (search.length > 0 && currentSearchMethod !== 'Selecione Busca' && results.length === 0) {
            api.get(`${process.env.REACT_APP_API_BASE_URL}/${handleSearchMethod()}/buscar/?busca=${search}`)
                .then(data => setResults(data.data));
        }
    })

    const handleSubmit = () => {
        if (search.trim().length > 0) {
            api.get(`${process.env.REACT_APP_API_BASE_URL}/${handleSearchMethod()}/buscar/?busca=${search.trim()}`)
                .then(data => setResults(data.data));
        } else if (search.trim().length < 1) {
            setResults([]);
        }
    }

    return (
        <>
        <Container className="mt-5">
            <SearchBar
            handleSubmit={handleSubmit}
            currentSearchMethod={currentSearchMethod}
            setCurrentSearchMethod={setCurrentSearchMethod}
            search={search}
            setSearch={setSearch}
            />
        </Container>
        <Container fluid className="ml-3 mr-3 d-flex">
            {currentSearchMethod === 'Notícia' && results.length > 0 ? results.map(news =>
                <Card
                as={Link}
                key={news._id}
                to={`/noticia/${news._id}`}
                className="custom-link shadow-sm mr-4"
                style={{width: '23%'}}
                >
                <Card.Body>
                    <Card.Title>{news.headline}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Status: <span className={statusSwitch(news.status)}>{news.status}</span></Card.Subtitle>
                    <Card.Text>{news.introduction}</Card.Text>
                </Card.Body>
            </Card>) : false}
            {currentSearchMethod === 'Político' && results.length > 0 ? results.map(politicos =>
            <Card key={politicos._id} className="custom-link mr-5" as={Link} to={`/politico/${politicos._id}`} style={{ width: '18rem' }}>
                <Card.Header as="h4">{politicos.fullName}</Card.Header>
                <Card.Img  className="mx-auto" variant="top" src={politicos.imageURL} style={{ width: '10rem' }}/>
                <Card.Body> 
                    <Card.Subtitle className="mb-2 text-muted">{politicos.province}</Card.Subtitle>
                        <Card.Text> Status: <span className={statusSwitch(politicos.status)}>{politicos.status}</span></Card.Text>
                </Card.Body>
            </Card>) : false}
        </Container>
        </>
    );
}

export default SearchResults;