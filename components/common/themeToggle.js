// components/ThemeToggle.js
import { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function ThemeToggle() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<label
			for='toggleTheme'
			className='swap swap-rotate text-base-content md:bg-base-100 md:rounded-full w-5 md:w-8 h-5 md:h-8 md:shadow-sm md:hover:shadow-md transition-all'
		>
			<input
				id='toggleTheme'
				type='checkbox'
				className='theme-controller'
				checked={theme === 'corporate'}
				onChange={toggleTheme}
			/>

			<MdLightMode
				className='swap-off'
				size={14}
			/>

			<MdDarkMode
				className='swap-on'
				size={14}
			/>
		</label>
	);
}
