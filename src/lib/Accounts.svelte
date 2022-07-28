<ul class="flex gap-4 justify-center" class:closed={!$open} style:grid-area={area}>
	<li>
		<a href="https://instagram.com/shoheihomeground" target="_blank" rel="noopener noreferrer">
			<Instagram/>
		</a>
	</li>
	<li>
		<a href="https://youtube.com/shoheihomeground" target="_blank" rel="noopener noreferrer">
			<YouTube/>
		</a>
	</li>
</ul>

<style>
	a {
		@apply text-2xl;
	}
</style>

<script>
	import { open } from '$lib/header/Toggle.svelte'
	import Instagram from '$icon/Instagram.svelte'
	import YouTube from '$icon/YouTube.svelte'

	export let area = null
</script>
