import React, { useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import CreatePolitico from '../Forms/CreatePolítico';
import CreateNoticia from '../Forms/CreateNoticia';
import EditarDados from '../Forms/EditarDados';
import './Dashboard.css';

const Dashboard = ({userData}) => {
    const [showCreatePolitico, setShowCreatePolitico] = useState(false);
    const [showCreateNoticia, setShowCreateNoticia] = useState(false);
    return (
        <>
            <Container fluid className="d-flex dashboard-container justify-content-center">
                <Row className="pt-5 w-100">
                    <Col lg={4} className="d-flex flex-column">
                        <h2>Meus políticos</h2>
                        <Container className="dashboard-table-container">

                        </Container>
                        <Button
                            size="lg"
                            className="align-self-center mt-4"
                            onClick={() => setShowCreatePolitico(true)}
                        >
                            Criar Político
                        </Button>
                    </Col>
                    <Col lg={4} className="d-flex flex-column">
                        <h2>Minhas Notícias</h2>
                        <Container className="dashboard-table-container">

                        </Container>
                        <Button
                        size="lg"
                        className="align-self-center mt-4"
                        onClick={() => setShowCreateNoticia(true)}
                        >
                            Criar Notícia
                        </Button>
                    </Col>
                    <Col lg={4} className="d-flex flex-column">
                        <h2>Minha Conta</h2>
                        <Container className="dashboard-table-container">
                            <EditarDados userData={userData} />
                        </Container>
                    </Col>
                </Row>
            </Container>
            <CreatePolitico show={showCreatePolitico} onHide={() => setShowCreatePolitico(false)} />
            <CreateNoticia show={showCreateNoticia} onHide={() => setShowCreateNoticia(false)} />
        </>
    )
}

export default Dashboard;