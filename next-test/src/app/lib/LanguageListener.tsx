// 'use client';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setLanguage } from './languageSlice';
// import i18n from 'i18next';

// const LanguageListener = () => {
// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		const handleLanguageChange = (lng) => {
// 			dispatch(setLanguage(lng));
// 		};

// 		i18n.on('languageChanged', handleLanguageChange);

// 		return () => {
// 			i18n.off('languageChanged', handleLanguageChange);
// 		};
// 	}, [dispatch]);

// 	return null;
// };

// export default LanguageListener;
