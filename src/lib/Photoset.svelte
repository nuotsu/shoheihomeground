<li>
	<a class="grid" href="/{date}/{category}/{photoset}">
		<figure class="overflow-hidden">
			<Image className="w-full transition-all" {...images[thumbnail]} w={400} h={400} />
		</figure>

		<div class="relative grid h-full items-end px-4 pb-2 text-white text-right">
			<p class="flex items-end">
				<strong>Photoset {photoset}</strong>
				<small class="block ml-auto">{images.length} photos</small>
			</p>
		</div>
	</a>
</li>

<style>
	li:hover :global(img) {
		filter: brightness(1.2);
		transform: scale(1.1);
	}

	figure,
	div {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}

	div {
		text-shadow: 0 0.25ch 1ch #000;
	}
</style>

<script>
	import Image from '$lib/Image.svelte'

	export let images, thumbnail, date, category, photoset
</script>
