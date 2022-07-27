<ul class="social" class:closed={!$open} style:grid-area={area}>
	<li><a href="https://instagram.com/shoheihomeground" target="_blank" rel="noopener noreferrer">Instagram</a></li>
	<li><a href="https://youtube.com/shoheihomeground" target="_blank" rel="noopener noreferrer">YouTube</a></li>
</ul>

<style>
	ul {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}
</style>

<script>
	import { open } from '$lib/header/Toggle.svelte'

	export let area
</script>
