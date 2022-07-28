<H1>
	<Date {date} />
	<p slot="sub">{#if isLatest}Latest{/if}</p>
</H1>

<TOC>
	{#each imagesByCategory as [category]}
		<li><a class="hover:underline" href="#{category}">{categories[category]}</a></li>
	{/each}
</TOC>

{#each imagesByCategory as [category, photosets]}
	<CategorySection id={category} {date} {category} {photosets} />
{/each}

<script>
	import H1 from '$lib/H1.svelte'
	import TOC from '$lib/TOC.svelte'
	import categories from '$lib/categories'
	import Date from '$lib/Date.svelte'
	import CategorySection from '$lib/categories/CategorySection.svelte'

	export let date, imagesByCategory

	$: isLatest = Object.keys(byDate)[0] === date
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
