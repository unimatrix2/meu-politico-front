import React, { useState, useEffect } from 'react';
import api from '../../services/api.service';
import { Container, InputGroup, DropdownButton, FormControl, Button, Dropdown, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { statusSwitch } from '../../utils/statusStyling';
const SearchResults = (props) => {
    const handleSearchMethod = () => {
            switch (props.currentSearchMethod) {
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
        if (props.search.length > 0 && props.currentSearchMethod !== 'Selecione Busca' && results.length === 0) {
            api.get(`${process.env.REACT_APP_API_BASE_URL}/${handleSearchMethod()}/buscar/?busca=${props.search}`)
                .then(data => setResults(data.data));
        }
    })

    const handleSubmit = () => {
        api.get(`${process.env.REACT_APP_API_BASE_URL}/${handleSearchMethod()}/buscar/?busca=${props.search.trim()}`)
            .then(data => setResults(data.data));
    }

    return (
        <>
        <Container className="mt-5">
            <InputGroup>
                <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    className="search-dropdown"
                    title={props.currentSearchMethod}
                    id="busca"
                >
                    <Dropdown.Item as="button" onClick={() => props.setCurrentSearchMethod('Notícia') }>Notícia</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => props.setCurrentSearchMethod('Político') }>Político</Dropdown.Item>
                </DropdownButton>
                {props.currentSearchMethod === 'Selecione Busca' ? <FormControl
                        disabled
                        className="search-bar-field"
                        value={props.search}
                        onChange={(event) => props.setSearch(event.target.value)}
                        placeholder={props.currentSearchMethod === 'Selecione Busca' ? "Buscar políticos ou notícias" : `Buscar ${props.currentSearchMethod}`}
                        ></FormControl> : <FormControl
                        className="search-bar-field"
                        value={props.search}
                        onChange={(event) => props.setSearch(event.target.value)}
                        placeholder={props.currentSearchMethod === 'Selecione Busca' ? "Buscar políticos ou notícias" : `Buscar ${props.currentSearchMethod}`}
                        onKeyPress={(event) => { if (event.key === "Enter") { handleSubmit() } }}
                        ></FormControl>}
                <InputGroup.Prepend>
                    <Button
                    variant="outline-secondary"
                    className="search-submit-button"
                    onClick={() => handleSubmit()}
                    >
                        Buscar
                    </Button>
                </InputGroup.Prepend>
            </InputGroup>
        </Container>
        <Container fluid className="ml-3 mr-3 d-flex">
            {props.currentSearchMethod === 'Notícia' && results.length > 0 ? results.map(news =>
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
        </Container>
        </>
    );
}

export default SearchResults;