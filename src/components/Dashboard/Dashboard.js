import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreatePolitico from '../Forms/CreatePolítico';
import CreateNoticia from '../Forms/CreateNoticia';
import EditarDados from '../Forms/EditarDados';
import './Dashboard.css';

const Dashboard = ({userData}) => {
    return (
        <>
            <Container fluid className="d-flex flex-row dashboard-container">
                <Row className="pt-3 w-100">
                    <Col lg={4} className="d-flex flex-column">
                        <Button
                        as={Link}
                        size="lg"
                        className="modal-btn-custom-login"
                        style={{width: 'fit-content', alignSelf: 'center'}}>
                            Meus políticos
                        </Button>
                        <Container className="dashboard-table-container">
                            <CreatePolitico />
                        </Container>
                    </Col>
                    <Col lg={4} className="d-flex flex-column">
                        <h2>Minhas Notícias</h2>
                        <Container className="dashboard-table-container">
                            <CreateNoticia />
                        </Container>
                    </Col>
                    <Col lg={4} className="d-flex flex-column">
                        <h2>Minha Conta</h2>
                        <Container className="dashboard-table-container">
                            <EditarDados userData={userData} />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;