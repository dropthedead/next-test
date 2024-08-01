import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
	formData: {
		name: string;
		email: string;
		password: string;
	};
}

const initialState: FormState = {
	formData: {
		name: '',
		email: '',
		password: '',
	},
};

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setFormData: (
			state,
			action: PayloadAction<{ name: string; email: string; password: string }>
		) => {
			state.formData = action.payload;
		},
	},
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
