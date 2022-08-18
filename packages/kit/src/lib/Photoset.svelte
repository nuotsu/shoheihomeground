<article>
	<a class="grid" href="/{date}/{category.code}/{set}">
		<figure class="grid overflow-hidden" style:--col={previews.length - 1}>
			{#each previews as image, i}
				<button style:grid-column="{i+1} / span 1" />
				<Img className="w-full" {image} w={400} h={400} />
			{/each}
		</figure>

		<div>
			<p>
				<strong>Photoset {set}</strong>
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

	button {
		position: relative;
		z-index: 2;
		grid-row: 1 / -1;
	}

	button:hover + :global(img) { position: relative; }

	div {
		pointer-events: none;
		position: relative;
		display: grid;
		height: 100%;
		align-items: end;
		padding: 0 1rem 0.5rem;
		text-align: right;
		text-shadow: 0 0.25ch 1ch #000;

		@apply text-white;
	}

	p {
		display: flex;
		align-items: flex-end;
	}

	small {
		display: block;
		margin-left: auto;
	}
</style>

<script>
	import Img from '$lib/Img.svelte'

	export let photos, t, date, category, set

	$: previews = [
		...photos.slice(t),
		...photos.slice(0, t)
	].slice(0, Math.min(photos.length, 10)).reverse()
</script>
