<li>
	<a href="/{date}/{category}/{photoset}">
		<figure>
			<Image {...images[thumbnail]} w={400} h={400} />
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
	li:hover :global(img) {
		filter: brightness(1.2);
		transform: scale(1.1);
	}

	a { display: grid; }

	figure,
	div {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}

	figure { overflow: hidden; }

	figure :global(img) {
		@apply w-full transition-all;
	}

	div {
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
</script>
