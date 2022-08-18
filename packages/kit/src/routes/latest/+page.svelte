<Head title="Latest" />

<H1 date={latest}>Latest</H1>

{#each imagesByCategory as [category, photosets]}
	<CategorySection date={latest} {category} {photosets} />
{/each}

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import byDate from '$data/images-by-date.json'
	import CategorySection from '$lib/categories/CategorySection.svelte'

	const latest = Object.keys(byDate)[0]
	const imagesByCategory = Object.entries(byDate[latest])
</script>
