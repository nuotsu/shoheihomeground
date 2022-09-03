/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				ink: '#0d1841',
				accent: '#e72626',
				'accent-2': '#79f4e4',
			},
			fontFamily: {
				sans: `'Chakra Petch', sans-serif`,
				digital: `Silkscreen, monospace`,
			},
			screens: {
				'xs': { min: '480px' },
				'<xs': { max: '479px' },
				'<sm': { max: '639px' },
				'<md': { max: '767px' },
				'<lg': { max: '1023px' },
				'<xl': { max: '1279px' },
				'<2xl': { max: '1535px' }
			},
		},
	},
	plugins: [],
}
