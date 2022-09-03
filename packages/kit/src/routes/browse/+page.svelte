<Head
	title="Browse"
	description="Browse through all photos of Shohei Ohtani. Filter by category and date."
/>

<H1>Browse all photos</H1>

<section class="section">
	<FilterList/>
	<Results {...data} />
</section>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import FilterList from './FilterList.svelte'
	import Results from './Results.svelte'

	export let data
</script>
