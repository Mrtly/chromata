import { type Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			height: {
				test: '120px',
			},
			fontFamily: {
				funnel: ['Funnel Sans', 'serif'],
				open: ['Open Sans', 'serif'],
			},
		},
	},
	plugins: [
		// ie. componentClasses
	],
}

export default config
