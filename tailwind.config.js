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
					50: "#FDEDF5",
					100: "#FBDAEB",
					200: "#F7B5D6",
					300: "#F390C2",
					400: "#F06BAD",
					500: "#EC4899",
					600: "#DE177A",
					700: "#A6115C",
					800: "#6F0C3D",
					900: "#37061F",
					950: "#1C030F"
				},
				callout: {
					info: {
						primary: "#80DFFF",
						background: "#DFF7FF",
					},
					warning: {
						primary: "#FFFF3D",
						background: "#FFFFB3",
					},
					danger: {
						primary: "#FF8080",
						background: "#FFEBEC",
					}
				}
			}
		},
	},
	plugins: [],
}
