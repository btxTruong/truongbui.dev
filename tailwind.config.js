const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.webc'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
				sans: ['Inter', defaultTheme.fontFamily.sans],
			},
			// https://www.tints.dev
			colors: {
				primary: {
					400: "#F06BAD",
					500: '#EC4899',
					600: "#DE177A",
				}
			}
		},
	},
	plugins: [],
}
