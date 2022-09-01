<Head title={category.name} />

<H1>{category.name}</H1>

{#each filtered as { date, category, photosets }}
	<PhotosetSection {date} {category} {photosets}>
		<a slot="title" class="link-hover" href="/{date}">
			<Date {date} />
		</a>
	</PhotosetSection>
{/each}

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import PhotosetSection from '$lib/PhotosetSection.svelte'
	import Date from '$lib/Date.svelte'
	import { page } from '$app/stores'

	export let data

	$: ({ category } = data)
	$: ({ photos } = $page.data.sanity)

	$: filtered = photos
		.filter(p => p.categories.map(c => c.category.code).includes(category.code))
		.map(({ date, categories }) => ({
			date,
			...categories.filter(c => c.category.code === category.code)[0],
		}))
</script>
