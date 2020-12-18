import React from 'react';
import api from '../../services/api.service';
import { Button, Form, Col, Modal } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const EditPolitico = (props) => {
    //schema de validação
    const schema = yup.object({
		fullName: yup
            .string()
            .trim()
			.matches(/^[A-Z]/, "Primeira letra maiúscula")
			.min(5, "Mínimo de 5 caracteres")
			.max(100, "Máximo de 100 caracteres")
            .required("Campo obrigatório"),
        currentPosition: yup
            .string()
            .oneOf(['Candidato', 'Vereador', 'Prefeito', 'Dep. Estadual', 'Governador', 'Dep. Federal', 'Senador', 'Presidente', 'Cargo Indireto', 'Outro/Não Sei'])
            .required("Campo obrigatório"),
        lastPosition: yup
            .string()
            .oneOf(['Candidato', 'Vereador', 'Prefeito', 'Dep. Estadual', 'Governador', 'Dep. Federal', 'Senador', 'Presidente', 'Cargo Indireto', 'Outro/Não Sei'])
            .required("Campo obrigatório"),
        province: yup
            .string()
            .oneOf(['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
            'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
            'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'])
            .required("Campo obrigatório"),
        officialInfoURL: yup
            .string()
            .trim()
            .required("Campo obrigatório"),
        imageURL: yup
            .string()
            .trim()
            .required("Campo obrigatório"),
        status: yup.string().required("Campo obrigatório"),           
	});
    // estado inicial para o Formik
    const initState = {
        fullName: props.pol.fullName,
        currentPosition: props.pol.currentPosition,
        lastPosition: props.pol.lastPosition,
        province: props.pol.province,
        officialInfoURL: props.pol.officialInfoURL,
        imageURL: props.pol.imageURL,
        status: 'editar'
    };

    // Método de submissão do fomrmulário
    const handleSubmitMethod = async (values, helperMethods) => {
        try {
            api.put(
                `${process.env.REACT_APP_API_BASE_URL}/politicos/privado/editar/${props.pol._id}`,
                values)
                .then(data => {
                    props.setUpdated(true);
                    alert('Político editado com sucesso!');
                    props.onHide();
                })

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Modal
            size="lg"
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className="modal-header">
                <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                    Editar Político
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
                        <Form noValidate onSubmit={handleSubmit} className="d-flex flex-column align-items-center form-container">
                            <Form.Group as={Col} md="10" controlId="validationFormik16">
                                <Form.Label>Nome Completo do Político</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        value={values.fullName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.fullName && !errors.fullName}
                                        isInvalid={touched.fullName && errors.fullName}
                                        className="input-custom"
                                    />
                                <Form.Control.Feedback type="invalid">{errors.politicos}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik19">
                                <Form.Label>Posição Atual</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="currentPosition"
                                    value={values.currentPosition}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.currentPosition && !errors.currentPosition}
                                    isInvalid={touched.currentPosition && errors.currentPosition}
                                    className="input-custom"
                                    autoComplete="off"
                                >
                                    <option>Candidato</option>
                                    <option>Vereador</option>
                                    <option>Prefeito</option>
                                    <option>Dep. Estadual</option>
                                    <option>Governador</option>
                                    <option>Dep. Federal</option>
                                    <option>Senador</option>
                                    <option>Presidente</option>
                                    <option>Cargo Indireto</option>
                                    <option>Outro/Não Sei</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">{errors.currentPosition}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik19">
                                <Form.Label>Última Posição</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="lastPosition"
                                    value={values.lastPosition}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.lastPosition && !errors.lastPosition}
                                    isInvalid={touched.lastPosition && errors.lastPosition}
                                    className="input-custom"
                                    autoComplete="off"
                                >
                                    <option>Candidato</option>
                                    <option>Vereador</option>
                                    <option>Prefeito</option>
                                    <option>Dep. Estadual</option>
                                    <option>Governador</option>
                                    <option>Dep. Federal</option>
                                    <option>Senador</option>
                                    <option>Presidente</option>
                                    <option>Cargo Indireto</option>
                                    <option>Outro/Não Sei</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">{errors.lastPosition}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik19">
                                <Form.Label>Estado</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="province"
                                    value={values.province}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.province && !errors.province}
                                    isInvalid={touched.province && errors.province}
                                    className="input-custom"
                                    autoComplete="off"
                                >
                                    <option>AC</option>
                                    <option>AL</option>
                                    <option>AP</option>
                                    <option>AM</option>
                                    <option>BA</option>
                                    <option>CE</option>
                                    <option>DF</option>
                                    <option>ES</option>
                                    <option>GO</option>
                                    <option>MA</option>
                                    <option>MT</option>
                                    <option>MS</option>
                                    <option>MG</option>
                                    <option>PA</option>
                                    <option>PB</option>
                                    <option>PR</option>
                                    <option>PE</option>
                                    <option>PI</option>
                                    <option>RJ</option>
                                    <option>RN</option>
                                    <option>RS</option>
                                    <option>RO</option>
                                    <option>RR</option>
                                    <option>SC</option>
                                    <option>SP</option>
                                    <option>SE</option>
                                    <option>TO</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">{errors.province}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik16">
                                <Form.Label>URL Oficial</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="officialInfoURL"
                                        value={values.officialInfoURL}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.officialInfoURL && !errors.officialInfoURL}
                                        isInvalid={touched.officialInfoURL && errors.officialInfoURL}
                                        className="input-custom"
                                    />
                                <Form.Control.Feedback type="invalid">{errors.politicos}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik16">
                                <Form.Label>URL Imagem</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="imageURL"
                                        value={values.imageURL}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.imageURL && !errors.imageURL}
                                        isInvalid={touched.imageURL && errors.imageURL}
                                        className="input-custom"
                                    />
                                <Form.Control.Feedback type="invalid">{errors.politicos}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik21">
                                <Form.Label>Status</Form.Label>
                                <Form.Control
                                    disabled
                                    type="text"
                                    name="status"
                                    value="editar"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.status && !errors.status}
                                    isInvalid={touched.status && errors.status}
                                    className="input-custom"
                                    autoComplete="off"
                                />
                                <Form.Control.Feedback type="invalid">{errors.status}</Form.Control.Feedback>
                            </Form.Group>
                            <Modal.Footer className="modal-footer align-self-end">
                                <Button type="submit" className="btn btn-lg modal-btn-custom-login">Editar Político</Button>
                                <Button onClick={props.onHide} className="btn btn-lg modal-btn-custom-close">Fechar</Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    )
}

export default EditPolitico;