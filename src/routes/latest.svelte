<Heading title="Latest" date={latest} />

{#each imagesByCategory as [category, photosets]}
	<CategorySection date={latest} {category} {photosets} />
{/each}

<script>
	import Heading from '$lib/Heading.svelte'
	import byDate from '$data/images-by-date.json'
	import CategorySection from '$lib/categories/CategorySection.svelte'

	const latest = Object.keys(byDate)[0]
	const imagesByCategory = Object.entries(byDate[latest])
</script>
