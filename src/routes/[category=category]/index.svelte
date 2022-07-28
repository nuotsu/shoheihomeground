<Head {title} />

<H1>{title}</H1>

<TOC>
	{#each imagesByDate as [date]}
		<li><a class="hover:underline" href="#{date}"><Date {date} /></a></li>
	{/each}
</TOC>

{#each imagesByDate as [date, photosets]}
	<CategorySection id={date} {date} {category} {photosets}>
		<time slot="title" datetime={date}>{day(date)}</time>
	</CategorySection>
{/each}

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import TOC from '$lib/TOC.svelte'
	import Date, { day } from '$lib/Date.svelte'
	import categories from '$lib/categories'
	import CategorySection from '$lib/categories/CategorySection.svelte'

	export let category, imagesByDate

	let title = categories[category]
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
