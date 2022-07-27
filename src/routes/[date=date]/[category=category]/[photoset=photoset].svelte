<Heading title={categories[category]} {date}>
	<p>Photoset {photoset} ({images.length} photos)</p>
</Heading>

<section class="debug">
	{#each images as image}
		<figure>
			<a class="link" href={cdn(image.public_id)} target="_blank" rel="noopener">
				<img src="" alt={image.public_id}>
			</a>
		</figure>
	{/each}
</section>

<script>
	import Heading from '$lib/Heading.svelte'
	import categories from '$lib/categories'
	import { cdn } from '$lib/Image.svelte'

	export let date, category, photoset, images
</script>

<script context="module">
	import byDate from '$data/images-by-date.json'

	export async function load({ params }) {
		const { date, category, photoset } = params
		const { images } = byDate[date][category][photoset]

		if (!images) return {
			status: 404,
			error: 'No images for this category and date were found.',
		}

		return {
			props: {
				...params,
				images,
			}
		}
	}
</script>
