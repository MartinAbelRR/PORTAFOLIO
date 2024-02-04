/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"dark-yellow-add": "#F2CD60",
        		"red-add": "#F25757",
        		"skyblue-add": "#61E8E1",
				"white-add" :"#EAF2E3",
        		"yellow-add": "#F2E863"
			}			
		}
	},
	plugins: [],
}
