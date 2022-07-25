import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$data': 'src/data',
			'$utils': 'src/utils',
		},
	},
	preprocess: [
		preprocess({
			postcss: true,
		})
	],
}

export default config
