'use client';
// context/ThemeContext.js
import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		// 检测系统主题偏好
		const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const initialTheme = prefersDarkMode ? 'business' : 'corporate';
		const savedTheme = localStorage.getItem('theme') || initialTheme;
		if (theme !== savedTheme) {
			setTheme(savedTheme);
			document.documentElement.setAttribute('data-theme', savedTheme);
		}
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === 'corporate' ? 'business' : 'corporate';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
	};

	if (!theme) {
		return null; // or a loading spinner
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
