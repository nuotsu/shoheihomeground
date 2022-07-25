<header>
	<h1>
		Latest
		<time datetime={latest}>{day(latest)}</time>
	</h1>
</header>

{#each imagesByCategory as [category, photosets]}
	<CategorySection date={latest} {category} {photosets} />
{/each}

<script>
	import byDate from '$data/images-by-date.json'
	import { day } from '$utils'
	import CategorySection from '$lib/categories/CategorySection.svelte'

	const latest = Object.keys(byDate)[0]
	const imagesByCategory = Object.entries(byDate[latest])
</script>
