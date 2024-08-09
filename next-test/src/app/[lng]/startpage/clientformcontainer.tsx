'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import ClientForm from './page';
import { setFormData } from '../../lib/formSlice';
const ClientFormContainer = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values: any) => {
		dispatch(setFormData(values));
	};

	return <ClientForm onSubmit={handleSubmit} formData={{}} />;
};

export default ClientFormContainer;
