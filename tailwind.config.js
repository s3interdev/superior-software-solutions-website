/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#FFA715',
				'primary-alt': '#FFAA57',
				accent: '#1A73E8',
				'accent-alt': '#E1F3FC',
				content: '#757575',
				'content-alt': '#424242',
				error: '#C25451',
				highlight: '#FFF7EB',
				'highlight-alt': '#FFFFFF',
			},
		},
		fontFamily: {
			sans: "'Open Sans', sans-serif",
		},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
