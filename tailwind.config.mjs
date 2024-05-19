/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				nav: '#E88C77',
				fontHero: '#C83727',
				font: '#878A92',
				bgButton: '#E88C77',
				bgButtonHover: '#C83727',
				bgElipsis: '#FBD9D0',
				bgCards: '#F6F6F6',
				fontProduct: '#5c5f6a'
			},
			screens: {
				'custom-lg': '1110px',
				'custom-md': '820px',
			},
		},
	},
	plugins: [],
}
