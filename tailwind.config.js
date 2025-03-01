/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			gridTemplateColumns: {
				"custom-template": "0.8fr 1.2fr 1.1fr 1.1fr 1.1fr 1.1fr 1.4fr",
			},
			colors: {
				"primary-linear-medium": "#2B0707",
				"primary-linear-dark": "#090D12",
				"primary-light": "#9C8574",
				"custom-grey": "#59595F",
				"custom-dark-gray": "#353137",
				"linear-dark": "#18181D",
				"linear-darker": "#101118",
				"light-green": "#73FCBE",
				"dark-green": "#284238",
				"light-red": "#E52F18",
				"medium-red": "#ED1D49",
				"dark-red": "#641813",
				"custom-white": "#F1ECEC",
			},
		},
	},
	plugins: [],
};
