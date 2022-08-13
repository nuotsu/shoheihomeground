<li>
	<a class="grid" href="/{date}/{category}/{photoset}">
		<figure class="grid overflow-hidden" style:--col={previews.length - 1}>
			{#each previews as image, i}
				<button style:grid-column="{i+1} / span 1" />
				<Image className="w-full" {...image} w={400} h={400} />
			{/each}
		</figure>

		<div>
			<p>
				<strong>Photoset {photoset}</strong>
				<small>{images.length} photos</small>
			</p>
		</div>
	</a>
</li>

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
	import Image from '$lib/Image.svelte'

	export let images, thumbnail, date, category, photoset

	$: previews = [
		...images.slice(thumbnail),
		...images.slice(0, thumbnail)
	].slice(0, Math.min(images.length, 10)).reverse()
</script>
