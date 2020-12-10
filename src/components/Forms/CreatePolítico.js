import React from 'react';
import axios from 'axios';
import { Modal, Button, Form, Col, Popover, OverlayTrigger } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const fontPopover = (
    <Popover id="popover-basic" className="modal-body">
        <Popover.Content>
            Nossa fonte preferida é o <a href="divulgacandcontas.tse.jus.br" target="_blank">divulgacandcontas.tse.jus.br</a>
        </Popover.Content>
    </Popover>
)

const imagePopover = (
    <Popover id="popover-basic" className="modal-body">
        <Popover.Content>
            Na página do político disponível no <a href="divulgacandcontas.tse.jus.br" target="_blank">divulgacandcontas.tse.jus.br</a>,
            clique com o botão diretio do cursor em "copiar endereço da imagem" e cole aqui.
        </Popover.Content>
    </Popover>
)

const CreatePolitico = (props) => {
    //schema de validação
    const schema = yup.object({
		fullName: yup
            .trim()
			.string()
			.matches(/^[A-Z]/, "Primeira letra maiúscula")
			.min(3, "Mínimo de 3 caracteres")
			.max(50, "Máximo de 50 caracteres")
            .required("Campo obrigatório"),
        currentPosition: yup
            .oneOf(['Candidato', 'Vereador', 'Prefeito', 'Dep. Estadual', 'Governador', 'Dep. Federal', 'Senador', 'Presidente', 'Cargo Indireto', false])
            .required(),
        lastPosition: yup
            .oneOf(['Candidato', 'Vereador', 'Prefeito', 'Dep. Estadual', 'Governador', 'Dep. Federal', 'Senador', 'Presidente', 'Cargo Indireto', false])
            .required(),
        province: yup
            .oneOf(['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
            'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
            'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'])
            .required(),
        officialInfoURL: yup
            .trim()
            .string()
            .matches(/((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, "Insira uma URL válida"),
        imageURL: yup
            .trim()
            .string()
            .required(),
        status: yup.string().required()

            
	});
    // estado inicial para o Formik
    const initState = {
        fullName: '',
        currentPosition: '',
        lastPosition: '',
        officialInfoURL: '',
        imageURL: '',
        status: 'autorizar'
    };

    // Método de submissão do fomrmulário
    const handleSubmitMethod = async (values, helperMethods) => {
        try {
            await axios.post(
                `${process.env.REACT_APP_API_BASE_URL}/politicos/privado/criar`,
                values
            );
            // Mudar esse alert para o componente de mensagem do bootstrap com setTimeout

        } catch (error) {
            if (error.response.data && error.response.data.type === "Politico-Existe") {
                helperMethods.setFieldError('fullName', error.response.data.message);
                helperMethods.setFieldError('currentPosition', error.response.data.message);
                helperMethods.setFieldError('lastPosition', error.response.data.message);
                helperMethods.setFieldError('officialInfoURL', error.response.data.message);
                helperMethods.setFieldError('imageURL', error.response.data.message)
            }
        }
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
                                <Form.Label>Nome Completo</Form.Label>
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
                                <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik03">
                                <Form.Label>Estado</Form.Label>
                                <Form.Control
                                    type="select"
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
                            <Form.Group as={Col} md="10" controlId="validationFormik02">
                                <Form.Label>Cargo Atual</Form.Label>
                                <Form.Control
                                    type="select"
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
                            <Form.Group as={Col} md="10" controlId="validationFormik03">
                                <Form.Label>Último Cargo</Form.Label>
                                <Form.Control
                                    type="select"
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
                            <Form.Group as={Col} md="10" controlId="validationFormik04">
                                <Form.Label>Fonte Oficial</Form.Label>
                                <OverlayTrigger trigger="focus" placement="right" overlay={fontPopover}>
                                <Form.Control
                                    type="text"
                                    name="officialInfoURL"
                                    value={values.officialInfoURL}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.officialInfoURL && !errors.officialInfoURL}
                                    isInvalid={touched.officialInfoURL && errors.officialInfoURL}
                                    className="input-custom"
                                    autoComplete="off"
                                />
                                </OverlayTrigger>
                                <Form.Control.Feedback type="invalid">{errors.officialInfoURL}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik05">
                                <Form.Label>Imagem do Político</Form.Label>
                                <OverlayTrigger trigger="focus" placement="right" overlay={imagePopover}>
                                <Form.Control
                                    type="text"
                                    name="imageURL"
                                    value={values.imageURL}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.imageURL && !errors.imageURL}
                                    isInvalid={touched.imageURL && errors.imageURL}
                                    className="input-custom"
                                    autoComplete="off"
                                />
                                </OverlayTrigger>
                                <Form.Control.Feedback type="invalid">{errors.imageURL}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationFormik06">
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
                                <Button type="submit" className="btn btn-lg modal-btn-custom-login">Criar Político</Button>
                                <Button onClick={props.onHide} className="btn btn-lg modal-btn-custom-close">Fechar</Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    )
}

export default CreatePolitico;