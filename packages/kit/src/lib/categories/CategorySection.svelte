<section class="section grid gap-4">
	<header {id} class="md:self-start md:sticky-top prose">
		<h2 class="h2">
			<slot name="title">categories[category]</slot>
		</h2>

		<ul>
			<li>{sortedPhotosets.length} photosets</li>
			<li>{total} photos</li>
		</ul>
	</header>

	<ul class="photos">
		{#each sortedPhotosets as photoset}
			{@const { images, thumbnail } = photosets[photoset]}
			<Photoset {images} {thumbnail} {date} {category} {photoset} />
		{/each}
	</ul>
</section>

<style>
	@screen md {
		section {
			grid-template-columns: minmax(300px, 1fr) 3fr;
		}
	}

	.photos {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;
	}
</style>

<script>
	import { page } from '$app/stores'
	import Photoset from '$lib/Photoset.svelte'

	export let id, date, category, photosets

	const { categories } = $page.stuff.sanity

	$: sortedPhotosets = Object.keys(photosets)
		.sort()
		.filter(set => !!photosets[set])

	$: total = Object.values(photosets).map(set => set.images.length).reduce((a, b) => a + b, 0)
</script>
