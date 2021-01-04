import React from 'react';
import {Button, InputGroup, FormControl, Dropdown, DropdownButton} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const SearchBar = ({currentSearchMethod, setCurrentSearchMethod, search, setSearch, setShowBar, handleSubmit}) => {
    const history = useHistory();
    const locus = window.location.pathname;
    return (
        <InputGroup>
            <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                className="search-dropdown"
                title={currentSearchMethod}
                id="busca"
            >
                <Dropdown.Item as="button" onClick={() => setCurrentSearchMethod('Notícia') }>Notícia</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => setCurrentSearchMethod('Político') }>Político</Dropdown.Item>
            </DropdownButton>
            {currentSearchMethod === 'Selecione Busca'
            ? <FormControl
                disabled
                className="search-bar-field"
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder={currentSearchMethod === 'Selecione Busca' ? "Buscar políticos ou notícias" : `Buscar ${currentSearchMethod}`}
            ></FormControl>
            : <FormControl
                className="search-bar-field"
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder={currentSearchMethod === 'Selecione Busca' ? "Buscar políticos ou notícias" : `Buscar ${currentSearchMethod}`}
                onKeyPress={locus === '/busca' && handleSubmit
                ? event => { if (event.key === "Enter") { handleSubmit() } else return }
                : event => { if (event.key === "Enter") { history.push("/busca"); setShowBar(false) } }}
            ></FormControl>}
            <InputGroup.Prepend>
                <Button
                    as={Link}
                    variant="outline-secondary"
                    to="/busca"
                    className="search-submit-button"
                    onClick={locus.includes('busca') ? () => handleSubmit() : () => setShowBar(false)}
                    >
                        Buscar
                    </Button>
            </InputGroup.Prepend>
        </InputGroup>
    )
}

export default SearchBar;