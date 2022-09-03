<a class="inline-block h-[3em] {className}" href="/">
	{#if small}
		<Img
			image={logo.small}
			alt="Shohei Home Ground logo"
			w={240} h={240}
		/>

	{:else}
		<Img
			image={logo.large}
			alt="Shohei Home Ground logo"
		/>
	{/if}
</a>

<style>
	a :global(img) {
		width: auto;
		height: 100%;
	}
</style>

<script>
	import Img from './Img.svelte'
	import { page } from '$app/stores'

	export let small, className

	const { logo } = $page.data.sanity.site
</script>
