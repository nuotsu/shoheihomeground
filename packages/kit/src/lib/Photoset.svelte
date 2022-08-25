<article class="text-white">
	<a class="grid" href="/{date}/{category.code}/{num(set)}">
		<figure class="grid overflow-hidden" style:--col={photos.length}>
			{#each photos as image, i}
				{#if photos.length > 1}
					<button style:grid-column="{i+1} / span 1" />
				{/if}
				<Img {image} w={400} h={400} />
			{/each}
		</figure>

		<div>
			{#if featured}
				<p class="text-right">
					<small>&starf; Featured</small>
				</p>
			{/if}

			<p class="flex flex-wrap items-end mt-auto">
				<strong class="grow">Photoset <Set {set} /></strong>
				<small>{photos.length} photos</small>
			</p>
		</div>
	</a>
</article>

<style>
	figure,
	figure :global(img),
	button,
	div {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}

	figure {
		grid-template-columns: repeat(var(--col, 1), 1fr);
	}

	figure :global(img) {
		width: 100%;
	}

	button {
		position: relative;
		z-index: 2;
		grid-row: 1 / -1;
	}

	button:hover + :global(img) { position: relative; }

	div {
		pointer-events: none;
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 0.5rem 1rem;
		text-shadow: 0 0.25ch 1ch #000;
	}

	small {
		display: block;
	}
</style>

<script>
	import Img from '$lib/Img.svelte'
	import Set, { num } from './Set.svelte'

	export let date, category, photos, t, featured, set
</script>
