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
				funnel: ['Funnel Sans', 'serif'],
				open: ['Open Sans', 'serif'],
			},
			keyframes: {
				'slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' },
				},
				'slide-out': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' },
				},
			},
			animation: {
				'slide-bottom-up': 'slide-up 0.1s ease-out',
				'slide-out-right': 'slide-out 0.2s ease-in',
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
