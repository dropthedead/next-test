import { configureStore, combineReducers, Middleware } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import languageReducer from './languageSlice';
import { localStorageMiddleware } from './middleware';

const rootReducer = combineReducers({
	form: formReducer,
	language: languageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(localStorageMiddleware),
});

export { store };
