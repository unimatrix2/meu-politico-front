import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
/* import './LoginModal.css'; */

const LoginModal = (props) => {
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Acesse sua conta
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Lugar do formulário de Login</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Entrar</Button>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default LoginModal;