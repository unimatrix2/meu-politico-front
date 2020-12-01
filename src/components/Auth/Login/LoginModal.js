import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const LoginModal = ({show, onHide}) => {
    const [loginSuccesfull, setIsLoginSuccesfull] = useState(false);

    //schema de validação
    const schema = yup.object({
		email: yup
			.string()
			.trim()
			.email("Digite um e-mail válido")
			.required("Campo obrigatório"),
		password: yup
			.string()
			.trim()
			.matches(/[A-Z]/, "Ao menos uma letra maiúscula")
			.matches(/[0-9]/, "Ao menos um número")
			.min(8, "Mínimo de 8 caracteres")
			.max(200, "Máximo de 200 caracteres")
			.required("Campo obrigatório"),
	});

    const initState = {
        email: '',
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
                    Acessar sua Conta
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
                            <Form.Group as={Col} md="10" controlId="validationFormik03">
                                <Form.Label>E-Mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.email && !errors.email && touched.password && !errors.password}
                                    // Com a invalidação condicionada a ambos, o usuário só sabe que o email
                                    // é valido quando a senha também preencher os requisitos
                                    isInvalid={(touched.email && errors.email) || (touched.password && errors.password)}
                                    className="input-custom"
                                />
                                <Form.Control.Feedback type="invalid">E-mail ou senha Incorretos</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik05">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.password && !errors.password && touched.email && !errors.email}
                                    // Com a invalidação condicionada a ambos, o usuário só sabe que o email
                                    // é valido quando a senha também preencher os requisitos
                                    isInvalid={(touched.password && errors.password) || (touched.email && errors.email) }
                                    className="input-custom"
                                />
                                <Form.Control.Feedback type="invalid">E-mail ou senha Incorretos</Form.Control.Feedback>
                            </Form.Group>
                            <Modal.Footer className="modal-footer">
                                <Button type="submit" className="btn btn-lg modal-btn-custom-login">Entrar</Button>
                                <Button onClick={onHide} className="btn btn-lg modal-btn-custom-close">Fechar</Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    )};

    export default LoginModal;