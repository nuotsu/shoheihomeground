<Marquee duration="120s">
	<p class="font-digital">
		{#each new Array(10) as _}
			<span>{site.title} ⚾️ {site.title} 🏟 </span>
		{/each}
	</p>
</Marquee>

<style>
	p {
		pointer-events: none;
		user-select: none;
		display: flex;
		align-items: center;
		gap: 1ch;
		padding-block: 0.25em 0.5em;

		@apply bg-[firebrick] text-white text-xs;
	}
</style>

<script>
	import { Marquee } from 'nuotsu.dev'
	import { page } from '$app/stores'

	const { site } = $page.data.sanity
</script>
