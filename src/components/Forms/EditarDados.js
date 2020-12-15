import React from 'react';
import api from '../../services/api.service';
import {Button, Form, Col, Popover, OverlayTrigger } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

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

const EditarDados = (props) => {
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
			.matches(
				/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
				"CPF inválido"
			)
			.min(11, "CPF Inválido")
			.max(14, "CPF inválido")
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
		firstName: props.userData ? props.userData.firstName : '',
		lastName: props.userData ? props.userData.lastName : '',
		email: props.userData ? props.userData.email : '',
		cpf: props.userData ? props.userData.cpf : '',
		password: "",
	};

	// Método de submissão do fomrmulário
	const handleSubmitMethod = async (values, helperMethods) => {
		try {
			delete values.confirmPassword;
			delete values.cpf;
			await api.post(
				`${process.env.REACT_APP_API_BASE_URL}/usuario/privado/atualizar`,
				values
			);
			// Mudar esse alert para o componente de mensagem do bootstrap com setTimeout
			alert("Dados atualizados com sucesso!");
		} catch (error) {
			if (
				error.response.data &&
				error.response.data.type === "Registro-Email-Existe"
			) {
				helperMethods.setFieldError(
					"email",
					error.response.data.message
				);
			}
		}
	};
	return (
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
				<Form noValidate onSubmit={handleSubmit} className="d-flex flex-column align-items-center mt-5">
					<Form.Group as={Col} md="10" controlId="validationFormik22">
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
						<Form.Control.Feedback type="invalid">
							{errors.firstName}
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="10" controlId="validationFormik23">
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
						<Form.Control.Feedback type="invalid">
							{errors.lastName}
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="10" controlId="validationFormik24">
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
						<Form.Control.Feedback type="invalid">
							{errors.email}
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="10" controlId="validationFormik25">
						<Form.Label>CPF</Form.Label>
						<Form.Control
							disabled
							type="text"
							name="cpf"
							value={values.cpf}
							onChange={handleChange}
							onBlur={handleBlur}
							isValid={touched.cpf && !errors.cpf}
							isInvalid={touched.cpf && errors.cpf}
							className="input-custom"
							autoComplete="off"
						/>
						<Form.Control.Feedback type="invalid">
							{errors.cpf}
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="10" controlId="validationFormik26">
						<Form.Label>Alterar Senha</Form.Label>
						<OverlayTrigger
							trigger="focus"
							placement="left"
							overlay={passwordPopover}
						>
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
						<Form.Control.Feedback type="invalid">
							{errors.password}
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="10" controlId="validationFormik27">
						<Form.Label>Confirme sua Nova Senha</Form.Label>
						<Form.Control
							type="password"
							name="confirmPassword"
							value={values.confirmPassword}
							onChange={handleChange}
							onBlur={handleBlur}
							isValid={
								touched.confirmPassword &&
								!errors.confirmPassword
							}
							isInvalid={
								touched.confirmPassword &&
								errors.confirmPassword
							}
							className="input-custom"
							autoComplete="off"
						/>
						<Form.Control.Feedback type="invalid">
							{errors.confirmPassword}
						</Form.Control.Feedback>
					</Form.Group>
						<Button
							type="submit"
							className="btn btn-lg modal-btn-custom-login submit-button-position"
						>
							Atualizar Cadastro
						</Button>
				</Form>
			)}
		</Formik>
	);
};

export default EditarDados;