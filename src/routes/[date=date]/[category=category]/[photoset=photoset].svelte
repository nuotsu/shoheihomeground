<header>
	<h1>{category}</h1>
	<time datetime={date}>{day(date)}</time>
	· Photoset {photoset}
	· {images.length} photos
</header>

<script>
	import day from '$utils/day'

	export let date, category, photoset, images
</script>

<script context="module">
	import byDate from '$data/images-by-date.json'

	export async function load({ params }) {
		const { date, category, photoset } = params
		const { images } = byDate[date][category][photoset]

	return {
		props: {
			...params,
			images,
		}
	}
 }
</script>
