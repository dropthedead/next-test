'use client';
import React from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as yup from 'yup';
import { TextField, Button, CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFormData } from '../lib/formSlice';

const schema = yup.object().shape({
	name: yup.string().required('Имя обязательно'),
	email: yup
		.string()
		.email('Неверный формат почты')
		.required('Почта обязательна'),
	password: yup
		.string()
		.required('Пароль обязателен')
		.min(8, 'Пароль должен быть длиной не менее 8 символов'),
});

interface ClientFormProps {
	onSubmit: (values: any) => void;
	formData: any;
}

const ClientForm: React.FC<ClientFormProps> = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values: any) => {
		dispatch(setFormData(values));
	};

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				password: '',
			}}
			validationSchema={schema}
			onSubmit={(values, { setSubmitting }) => {
				handleSubmit(values);
				setSubmitting(false);
			}}
		>
			{({ errors, touched, isSubmitting }) => (
				<Form className="reg_form">
					<Field
						as={TextField}
						label="Имя"
						variant="outlined"
						fullWidth
						name="name"
						error={touched.name && !!errors.name}
						helperText={<ErrorMessage name="name" />}
					/>
					<Field
						as={TextField}
						label="Почта"
						variant="outlined"
						fullWidth
						name="email"
						error={touched.email && !!errors.email}
						helperText={<ErrorMessage name="email" />}
					/>
					<Field
						as={TextField}
						label="Пароль"
						variant="outlined"
						fullWidth
						type="password"
						name="password"
						error={touched.password && !!errors.password}
						helperText={<ErrorMessage name="password" />}
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						disabled={isSubmitting}
						startIcon={isSubmitting && <CircularProgress size={20} />}
					>
						Регистрация
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default ClientForm;
