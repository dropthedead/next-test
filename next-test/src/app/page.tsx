import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
	name: yup.string().required('Имя обязательно'),
	email: yup
		.string()
		.email('Неверный формат почты')
		.required('Почта обязательна'),
	password: yup
		.string()
		.required('Пароль обязателен')
		.matches(
			/^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
			'Пароль должен содержать как минимум одну заглавную букву и один специальный символ, и быть длиной не менее 8 символов'
		),
	age: yup
		.number()
		.required('Возраст обязателен')
		.min(18, 'Вам должно быть больше 18 лет'),
});

const MainPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						label="Имя"
						variant="outlined"
						fullWidth
						{...register('name')}
						error={!!errors.name}
						helperText={errors.name?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Почта"
						variant="outlined"
						fullWidth
						{...register('email')}
						error={!!errors.email}
						helperText={errors.email?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Пароль"
						variant="outlined"
						fullWidth
						type="password"
						{...register('password')}
						error={!!errors.password}
						helperText={errors.password?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Возраст"
						variant="outlined"
						fullWidth
						type="number"
						{...register('age')}
						error={!!errors.age}
						helperText={errors.age?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button type="submit" variant="contained" color="primary">
						Регистрация
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default MainPage;
