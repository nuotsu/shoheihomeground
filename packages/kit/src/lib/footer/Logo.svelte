<a class="block max-w-[250px] mx-auto" href="/">
	<Img
		image={logo.large}
		alt="Shohei Home Ground logo"
	/>
</a>

<style>
	a :global(img) {
		width: auto;
	}

	@screen <md {
		a {
			max-width: 200px;
		}
	}
</style>

<script>
	import Img from '$lib/Img.svelte'
	import { page } from '$app/stores'

	const { logo } = $page.data.sanity.site
</script>
