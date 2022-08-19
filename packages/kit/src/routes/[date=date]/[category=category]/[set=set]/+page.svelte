<Head title="{category.name} — {format(date)}" />

<H1>
	{category.name}

	<p slot="sub">
		Photoset <code>{set}</code>
		—
		<a class="link-hover" href="/{date}">
			<Date {date} />
		</a>
	</p>
</H1>

<article class="section md:py-20 grid gap-8 items-center <md:px-0">
	{#each photos as photo}
		<figure class="m-auto">
			<a class="inline-block" href={urlFor(photo).url()}>
				<Img image={photo} w={600} />
			</a>
		</figure>
	{/each}
</article>

<style>
	article {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
</style>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import Date, { format } from '$lib/Date.svelte'
	import Img from '$lib/Img.svelte'
	import { urlFor } from '$utils/sanity'
	import { page } from '$app/stores'

	export let data

	const { category, categories } = data
	const { date, set } = $page.params

	const { photos } = categories
		.find(c => c.category.code === category.code)
		.photosets[set - 1]

	console.log(photos)
</script>
