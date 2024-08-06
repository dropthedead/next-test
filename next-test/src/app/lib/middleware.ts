import { Middleware } from '@reduxjs/toolkit';
import { RootState } from './store';
import { setFormData } from './formSlice';

const localStorageMiddleware: Middleware<unknown, RootState> =
	(store) => (next) => (action) => {
		const result = next(action);
		if (setFormData.match(action)) {
			localStorage.setItem(
				'userData',
				JSON.stringify(store.getState().form.formData)
			);
		}
		return result;
	};

export { localStorageMiddleware };
