import { configureStore, combineReducers, Middleware } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import { localStorageMiddleware } from './middleware';

const rootReducer = combineReducers({
	form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(localStorageMiddleware),
});

export { store };
