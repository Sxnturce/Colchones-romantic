/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				nav: '#E88C77',
			},
			screens: {
				'custom-lg': '1110px',
				'custom-md': '820px',
			},
		},
	},
	plugins: [],
}
