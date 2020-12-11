import React from 'react';
import api from '../../services/api.service';
import { Modal, Button, Form, Col, Popover, OverlayTrigger } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const sourcesPopover = (
    <Popover id="popover-basic" className="modal-body">
        <Popover.Content>
            Se quiser adicionar mais de uma fonte, separe as URLs com vírgula
        </Popover.Content>
    </Popover>
)

const politicosPopover = (
    <Popover id="popover-basic" className="modal-body">
        <Popover.Content>
            Se quiser adicionar mais de um político, separe os nomes com vírgula
        </Popover.Content>
    </Popover>
)

const CreateNoticia = (props) => {
    //schema de validação

    const schema = yup.object({
		headline: yup
            .string()
            .trim()
			.matches(/^[A-Z]/, "Primeira letra maiúscula")
			.min(5, "Mínimo de 5 caracteres")
			.max(100, "Máximo de 100 caracteres")
            .required("Campo obrigatório"),
        introduction: yup
            .string()
            .trim()
            .min(50, "Mínimo de 50 caracteres")
            .max(1000, "Máximo de 1000 caracteres")
            .required("Campo obrigatório"),
        category: yup
            .string()
            .oneOf(['Positiva', 'Negativa', 'Corrupção', 'Promessa Cumprida', 'Promessa Descumprida'])
            .required("Campo obrigatório"),
        sources: yup
            .string()
            .trim()
            .required("Campo obrigatório"),
        politicos: yup
            .string()
            .trim()
            .required("Campo obrigatório"),
        imageURL: yup
            .string()
            .trim()
            .matches(/((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, "Insira uma URL válida")
            .required("Campo obrigatório"),
        status: yup.string().required("Campo obrigatório"),           
	});
    // estado inicial para o Formik
    const initState = {
        headline: '',
        introduction: '',
        category: '',
        sources: '',
        politicos: '',
        status: 'autorizar'
    };

    // Método de submissão do fomrmulário
    const handleSubmitMethod = async (values, helperMethods) => {
        console.log(values);
        /* try {
            await api.post(
                `${process.env.REACT_APP_API_BASE_URL}/noticias/privado/criar`,
                values
            );
            // Mudar esse alert para o componente de mensagem do bootstrap com setTimeout

        } catch (error) {
            if (error.response.data && error.response.data.type === "Politico-Nao-Existe") {
                helperMethods.setFieldError('politicos', error.response.data.message);
                // Falta tratar mais erros
            }
        } */
    }
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className="modal-header">
                <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                    Criar uma Notícia
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
                            <Form.Group as={Col} md="10" controlId="validationFormik16">
                                <Form.Label>Nome Completo do(s) Político(s)</Form.Label>
                                <OverlayTrigger trigger="focus" placement="right" overlay={politicosPopover}>
                                    <Form.Control
                                        type="text"
                                        name="politicos"
                                        value={values.politicos}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.politicos && !errors.politicos}
                                        isInvalid={touched.politicos && errors.politicos}
                                        className="input-custom"
                                    />
                                </OverlayTrigger>
                                <Form.Control.Feedback type="invalid">{errors.politicos}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik17">
                                <Form.Label>Manchete</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="headline"
                                    value={values.headline}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.headline && !errors.headline}
                                    isInvalid={touched.headline && errors.headline}
                                    className="input-custom"
                                />
                                <Form.Control.Feedback type="invalid">{errors.headline}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik18">
                                <Form.Label>Breve Introdução</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="introduction"
                                    value={values.introduction}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.introduction && !errors.introduction}
                                    isInvalid={touched.introduction && errors.introduction}
                                    className="input-custom"
                                />
                                <Form.Control.Feedback type="invalid">{errors.introduction}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik19">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="category"
                                    value={values.category}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.category && !errors.category}
                                    isInvalid={touched.category && errors.category}
                                    className="input-custom"
                                    autoComplete="off"
                                >
                                    <option>Positiva</option>
                                    <option>Negativa</option>
                                    <option>Corrupção</option>
                                    <option>Promessa Cumprida</option>
                                    <option>Promessa descumprida</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik20">
                                <Form.Label>Fontes</Form.Label>
                                <OverlayTrigger trigger="focus" placement="right" overlay={sourcesPopover}>
                                    <Form.Control
                                        as="textarea"
                                        name="sources"
                                        value={values.sources}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.sources && !errors.sources}
                                        isInvalid={touched.sources && errors.sources}
                                        className="input-custom"
                                        autoComplete="off"
                                    />
                                </OverlayTrigger>
                                <Form.Control.Feedback type="invalid">{errors.sources}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik21">
                                <Form.Label>Status</Form.Label>
                                <Form.Control
                                    disabled
                                    type="text"
                                    name="status"
                                    value="autorizar"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.status && !errors.status}
                                    isInvalid={touched.status && errors.status}
                                    className="input-custom"
                                    autoComplete="off"
                                />
                                <Form.Control.Feedback type="invalid">{errors.status}</Form.Control.Feedback>
                            </Form.Group>
                            <Modal.Footer className="modal-footer">
                                <Button type="submit" className="btn btn-lg modal-btn-custom-login">Criar Notícia</Button>
                                <Button onClick={props.onHide} className="btn btn-lg modal-btn-custom-close">Fechar</Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    )
}

export default CreateNoticia;