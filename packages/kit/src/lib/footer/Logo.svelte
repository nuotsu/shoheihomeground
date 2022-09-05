<a class="block max-w-[300px] mx-auto" href="/">
	<Img
		image={logo.large}
		alt="Shohei Home Ground logo"
	/>
</a>

<style>
	a :global(img) {
		width: auto;
		height: 100%;
	}
</style>

<script>
	import Img from '$lib/Img.svelte'
	import { page } from '$app/stores'

	const { logo } = $page.data.sanity.site
</script>
