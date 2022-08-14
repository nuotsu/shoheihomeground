<Head title="{title} — {day(date)} — Photoset {photoset}" />

<H1 {date}>
	{title}
	<p slot="sub">Photoset {photoset} — {images.length} photos</p>
</H1>

<section class="section grid items-center gap-8 <sm:px-0">
	{#each images as image}
		<a
			class="link grid place-content-center"
			href={cdn(image.public_id)} target="_blank" rel="noopener"
		>
			<figure>
				<Image {...image} w={600} />
			</figure>
		</a>
	{/each}
</section>

<style>
	@screen sm {
		section {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}
</style>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import categories from '$lib/categories'
	import Image, { cdn } from '$lib/Image.svelte'
	import { day } from '$lib/Date.svelte'

	export let date, category, photoset, images

	let title = categories[category]
</script>

<script context="module">
	import byDate from '$data/images-by-date.json'
	import sortBy from '$utils/sortBy'

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
