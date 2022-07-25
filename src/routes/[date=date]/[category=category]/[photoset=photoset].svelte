<header>
	<h1>
		{categories[category]}
		<time datetime={date}>{day(date)}</time>
	</h1>
	<p>Photoset {photoset} ({images.length} photos)</p>
</header>

<section>
	{#each images as image}
		<figure>
			<a class="link" href={cdn(image.public_id)} target="_blank" rel="noopener">
				<img src="" alt={image.public_id}>
			</a>
		</figure>
	{/each}
</section>

<script>
	import categories from '$lib/categories'
	import { day } from '$utils'
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
