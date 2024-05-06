/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				udea:{
					"blue":"#04394E",
					"dg":"#04500D",
					"lg":"#81f881",
				}

			}
		},
	},
	plugins: [animations],
}

