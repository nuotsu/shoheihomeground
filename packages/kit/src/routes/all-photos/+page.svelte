<Head
	title="All Photos"
	description="A collection of all photos. Filter by category and date."
/>

<section class="section">
	<FilterList/>
	<Results {...data} />
</section>

<script>
	import Head from '$lib/Head.svelte'
	import FilterList from './FilterList.svelte'
	import Results from './Results.svelte'

	export let data
</script>
