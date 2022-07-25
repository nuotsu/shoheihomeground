<header>
	<h1>{categories[category]}</h1>
</header>

{#each imagesByDate as [date, photosets]}
	<CategorySection {date} {category} {photosets}>
		<time slot="title" datetime={date}>{day(date)}</time>
	</CategorySection>
{/each}

<script>
	import categories from '$lib/categories'
	import CategorySection from '$lib/categories/CategorySection.svelte'
	import { day } from '$utils'

	export let category, imagesByDate
</script>

<script context="module">
	import byCategory from '$data/images-by-category.json'

	export async function load({ params }) {
		const { category } = params
		const data = byCategory[category]

		if (!data) return {
			status: 404,
			error: 'No images for this category were found.',
		}

		return {
			props: {
				category,
				imagesByDate: Object.entries(data),
			}
		}
	}
</script>
