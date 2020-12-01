import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import './SignupModal.css';

const SignupModal = ({show, onHide}) => {
    const [isSignupSuccesfull, setIsSignupSuccesfull] = useState(false);

    //schema de validação
    const schema = yup.object({
        firstName: yup.string().trim().min(3, 'Mínimo de 3 caracteres').max(50, 'Máximo de 50 caracteres').required('Campo obrigatório'),
        lastName: yup.string().trim().min(3, 'Mínimo de 3 caracteres').max(100, 'Máximo de 100 caracteres').required('Campo obrigatório'),
        email: yup.string().trim().email('Digite um e-mail válido').required('Campo obrigatório'),
        cpf: yup.string().trim().min(11, 'Digite um CPF válido').max(11, 'Digite um CPF válido').required('Campo obrigatório'),
        password: yup.string().trim().min(8, 'Mínimo de 8 caracteres').max(200, 'Máximo de 200 caracteres').required('Campo obrigatório'),
        confirmPassword: yup.string().trim().oneOf([yup.ref('password'), null], 'Senhas precisam combinar').required('Campo')
    });
    // estado inicial para o Formik
    const initState = {
        firstName: '',
        lastName: '',
        email: '',
        cpf: '',
        password: ''
    };

    const handleSubmitMethod = async (values, helpers) => {
        // Necessita das rotas prontas para concluir
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className="modal-header">
                <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                    Crie uma conta
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
                <Formik
                    initialValues={initState}
                    onSubmit={console.log} // handleSubmitMethod
                    validationSchema={schema}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group as={Col} md="10" controlId="validationFormik01">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.firstName && !errors.firstName}
                                    isInvalid={touched.firstName && errors.firstName}
                                    className="input-custom"
                                />
                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik02">
                                <Form.Label>Sobrenome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.lastName && !errors.lastName}
                                    isInvalid={touched.lastName && errors.lastName}
                                    className="input-custom"
                                />
                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik03">
                                <Form.Label>E-Mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={touched.email && errors.email}
                                    className="input-custom"
                                />
                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik04">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cpf"
                                    value={values.cpf}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.cpf && !errors.cpf}
                                    isInvalid={touched.cpf && errors.cpf}
                                    className="input-custom"
                                />
                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.cpf}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik05">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.password && !errors.password}
                                    isInvalid={touched.password && errors.password}
                                    className="input-custom"
                                />
                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik06">
                                <Form.Label>Confirme sua Senha</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.confirmPassword && !errors.confirmPassword}
                                    isInvalid={touched.confirmPassword && errors.confirmPassword}
                                    className="input-custom"
                                />
                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                            </Form.Group>
                            <Modal.Footer className="modal-footer">
                                <Button type="submit" className="btn btn-lg modal-btn-custom-login">Criar Conta</Button>
                                <Button onClick={onHide} className="btn btn-lg modal-btn-custom-close">Fechar</Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    )
}

export default SignupModal;