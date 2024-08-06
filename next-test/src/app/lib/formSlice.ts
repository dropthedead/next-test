import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
	formData: {
		email: string;
		name: string;
	} | null;
}

const initialState: FormState = {
	formData: null,
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setFormData(state, action: PayloadAction<FormState['formData']>) {
			state.formData = action.payload;
		},
		clearFormData(state) {
			state.formData = null;
		},
	},
});

export const { setFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;
