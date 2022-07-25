<header>
	<h1><time datetime={date}>{day(date)}</time></h1>
</header>

{#each imagesByCategory as [category, photosets]}
	<CategorySection {date} {category} {photosets} />
{/each}

<script>
	import { day } from '$utils'
	import CategorySection from '$lib/categories/CategorySection.svelte'

	export let date, imagesByCategory
</script>

<script context="module">
	import byDate from '$data/images-by-date.json'

	export async function load({ params }) {
		const { date } = params
		const data = byDate[date]

		if (!data) return {
			status: 404,
			error: 'No images for this date were found.',
		}

		return {
			props: {
				date,
				imagesByCategory: Object.entries(data),
			}
		}
	}
</script>
