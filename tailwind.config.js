module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				bg: '#000019',
				accent: '#150044',
				border: '#090032',
				red: '#c50044',
				dimRed: '#800044',
				yellow: '#ffdd4e',
				orange: '#ff6e49',
			},
			height: {
				vh10: '10vh',
			},
			minHeight: {
				vh90: '90vh',
			},
			fontFamily: {
				mont: ['montserrat'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
