import flowbitePlugin from 'flowbite/plugin'
import flowbiteTypography from 'flowbite-typography'

import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					'50': '#c5cae9',
					'100': '#9fa8da',
					'200': '#7986cb',
					'300': '#5c6bc0',
					'400': '#3949ab',
					'500': '#3f51b5',
					'600': '#303f9f',
					'700': '#283593',
					'800': '#1a237e',
					'900': '#0d47a1'
				}
			}
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif']
		}
	},

	plugins: [flowbitePlugin, flowbiteTypography]
} as Config
