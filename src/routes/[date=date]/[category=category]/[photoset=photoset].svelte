<H1 {date}>
	{categories[category]}
	<p slot="sub">Photoset {photoset} ({images.length} photos)</p>
</H1>

<section class="section">
	{#each images as image}
		<figure>
			<a class="link" href={cdn(image.public_id)} target="_blank" rel="noopener">
				<Image {...image} w={600} />
			</a>
		</figure>
	{/each}
</section>

<style>
	section {
		display: grid;
		align-items: center;
		gap: 2rem;
	}

	@screen sm {
		section {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}

	@screen <sm {
		section {
			padding-inline: 0;
		}
	}

	figure {
		display: grid;
		place-content: center;
	}
</style>

<script>
	import H1 from '$lib/H1.svelte'
	import categories from '$lib/categories'
	import Image, { cdn } from '$lib/Image.svelte'

	export let date, category, photoset, images
</script>

<script context="module">
	import byDate from '$data/images-by-date.json'
	import { sortBy } from '$utils'

	export async function load({ params }) {
		const { date, category, photoset } = params
		const images = sortBy(byDate[date][category][photoset].images, 'public_id')

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
