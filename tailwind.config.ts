import { type Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			height: {
				test: '120px',
			},
			fontFamily: {
				open: ['Open Sans', 'serif'],
				gummy: ['Sour Gummy', 'serif'],
			},
			keyframes: {
				'slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' },
				},
				'slide-out': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' },
				},
			},
			animation: {
				'slide-bottom-up': 'slide-up 0.1s ease-out',
				'slide-bottom-out': 'slide-out 0.2s ease-in',
			},
		},
	},
	plugins: [
		// ie. componentClasses
		plugin(function ({ addComponents }) {
			addComponents({
				'.focusVisibleRingStyles': {
					'@apply ring-offset-white outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2':
						{},
				},
			})
		}),
	],
}

export default config
