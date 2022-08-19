<Head title={format(date)} />

<H1>
	<Date {date} />
</H1>
<PhotosByCategory {...data.photos} />

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import Date, { format } from '$lib/Date.svelte'
	import PhotosByCategory from '$lib/PhotosByCategory.svelte'
	import { page } from '$app/stores'

	const { date } = $page.params

	export let data
</script>
