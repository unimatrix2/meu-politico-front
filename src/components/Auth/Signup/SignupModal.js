import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Col, Popover, OverlayTrigger } from 'react-bootstrap';
import { Formik } from 'formik';
import MaskedInput from 'react-maskedinput';
import * as yup from 'yup';
import './SignupModal.css';

// Pop over do campo de CPF
const cpfPopover = (
    <Popover id="popover-basic" className="modal-body">
        <Popover.Content>
            Seu CPF é utilizado apenas apra impedir abusos na plataforma.
        </Popover.Content>
    </Popover>
)

// Pop over do campo de senha
const passwordPopover = (
    <Popover id="popover-basic" className="modal-body">
        <Popover.Title className="modal-body" as="h3">Sua senha precisa conter:</Popover.Title>
        <Popover.Content>
            <ul>
                <li>Ao menos 8 caracteres</li>
                <li>Ao menos um número</li>
                <li>Ao menos uma letra maiúscula</li>
                <li>Ao menos uma letra minúscula</li>
                <li>Ao menos um caractere especial (! @ # $ % ^ & * + = _ ? -)</li>
            </ul>
        </Popover.Content>
    </Popover>
)

const SignupModal = ({show, onHide}) => {
    const [isSignupSuccesfull, setIsSignupSuccesfull] = useState(false);

    //schema de validação
    const schema = yup.object({
		firstName: yup
			.string()
			.trim()
			.matches(/^[A-Z]/, "Primeira letra maiúscula")
			.min(3, "Mínimo de 3 caracteres")
			.max(50, "Máximo de 50 caracteres")
			.required("Campo obrigatório"),
		lastName: yup
			.string()
			.trim()
			.matches(/^[A-Z]/, "Primeira letra maiúscula")
			.min(3, "Mínimo de 3 caracteres")
			.max(100, "Máximo de 100 caracteres")
			.required("Campo obrigatório"),
		email: yup
			.string()
			.trim()
			.email("Digite um e-mail válido")
			.required("Campo obrigatório"),
		cpf: yup
			.string()
			.trim()
            .matches(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/, 'CPF inválido')
            .min(11, 'CPF Inválido')
            .max(14, 'CPF inválido')
			.required("Campo obrigatório"),
		password: yup
			.string()
			.trim()
            .matches(/[A-Z]/, "Ao menos uma letra maiúscula")
            .matches(/[a-z]/, "Ao menos uma letra minúscula")
            .matches(/[0-9]/, "Ao menos um número")
            .matches(/[!@#$%^&*+=_?-]/, "Ao menos um caractere especial")
			.min(8, "Mínimo de 8 caracteres")
			.max(200, "Máximo de 200 caracteres")
			.required("Campo obrigatório"),
		confirmPassword: yup
			.string()
			.trim()
			.oneOf([yup.ref("password"), null], "Senhas precisam combinar")
			.required("Campo obrigatório"),
	});
    // estado inicial para o Formik
    const initState = {
        firstName: '',
        lastName: '',
        email: '',
        cpf: '',
        password: ''
    };

    // Método de submissão do fomrmulário
    const handleSubmitMethod = async (values, helpers) => {
        // Precisa realizar a requisição axios
       console.log(values);
       // Precisa dar feedback ao usuário
       // Depois de um ou dois segundos, precisa
       // alterar o estado do App.js para fechar o modal
       // e por último abrir o modal de login
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
                    onSubmit={handleSubmitMethod}
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
                                    autoComplete="off"
                                />
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
                                    autoComplete="off"
                                />
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
                                    autoComplete="off"
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik04">
                                <Form.Label>CPF</Form.Label>
                                <OverlayTrigger trigger="focus" placement="right" overlay={cpfPopover}>
                                <Form.Control
                                    // Usando masked input aqui para o cpf
                                    as={MaskedInput}
                                    type="text"
                                    name="cpf"
                                    value={values.cpf}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.cpf && !errors.cpf}
                                    isInvalid={touched.cpf && errors.cpf}
                                    className="input-custom"
                                    mask="111.111.111-11"
                                    autoComplete="off"
                                />
                                </OverlayTrigger>
                                <Form.Control.Feedback type="invalid">{errors.cpf}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik05">
                                <Form.Label>Senha</Form.Label>
                                <OverlayTrigger trigger="focus" placement="right" overlay={passwordPopover}>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.password && !errors.password}
                                    isInvalid={touched.password && errors.password}
                                    className="input-custom"
                                    autoComplete="off"
                                />
                                </OverlayTrigger>
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
                                    autoComplete="off"
                                />
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