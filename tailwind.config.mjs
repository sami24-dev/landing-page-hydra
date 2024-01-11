/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				customBg: '#302C42',
				customtext: '#ffffff',
				customtextDark: '#343045',
				primary: '#C0B7E8',
				secundary: '#8176AF',
				third: '#3A3456',
				fourth: '#211E2E',
				fondo: 'rgba(0,0,0,0.3)',
				line: '#C0B7E854'
			},
			borderRadius: {
				'5xl': '2.6rem',
				'3lg': '7rem', 
				'5lg': '11.5rem', 
			},
			dropShadow: {
				'1xl': '0px 0px 20px rgba(0,0,0,0.5)',
				'4xl': [
					'0 35px 35px rgba(0, 0, 0, 0.25)',
					'0 45px 65px rgba(0, 0, 0, 0.15)'
				]
			},
			keyframes: {
				'slide-Left': {
				  '0% , 50%': {transform: 'translateX(100%)'},
				  '100%': {transform: 'translateX(0)'}
				}
			},
			animation: {
				'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'pulse-two': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'slide-Left': 'slide-Left 3s ease-out'
			},
			width: {
				19: '4.375rem',
				18: '4.0625rem',
				15: '3.75rem',
				13: '3.125rem'
			},
			height: {
				13: '3.125rem',
				17: '4.2',
				19: '4.375rem',
				150: '69.5rem'
			},
			left: {
				'left-61': '60%'
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
