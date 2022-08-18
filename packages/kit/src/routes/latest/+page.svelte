<Head title="Latest" />

<H1 date={date}>Latest</H1>
<PhotosByCategory {date} {categories} />

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import PhotosByCategory from '$lib/PhotosByCategory.svelte'
	import { page } from '$app/stores'

	const { date, categories } = $page.data.sanity.photos[0]
</script>
