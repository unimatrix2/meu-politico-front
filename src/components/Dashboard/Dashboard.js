import React, { useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = ({userData}) => {
    return (
        <>
            <Container fluid className="d-flex dashboard-container justify-content-center">
                <Row className="pt-5 w-100">
                    <Col lg={4} className="d-flex flex-column">
                        <h2>Meus políticos</h2>
                        <Container className="dashboard-table-container">

                        </Container>
                        <Button size="lg" className="align-self-center mt-4">Criar Político</Button>
                    </Col>
                    <Col lg={4} className="d-flex flex-column">
                        <h2>Minhas Notícias</h2>
                        <Container className="dashboard-table-container">

                        </Container>
                        <Button size="lg" className="align-self-center mt-4">Criar Notícia</Button>
                    </Col>
                    <Col lg={4} className="d-flex flex-column">
                        <h2>Minha Conta</h2>
                        <Container className="dashboard-table-container">

                        </Container>
                        <Button size="lg" className="align-self-center mt-4">Alterar Dados</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;