<header bind:clientHeight>
	<a href="/">Shohei Home Ground</a>
</header>

<style>
	header {
		position: sticky;
		top: 0;
	}
</style>

<script>
	import { onMount } from 'svelte'

	let clientHeight

	onMount(() => {
		document.documentElement.style.setProperty('--header-height', clientHeight + 'px')
	})
</script>
