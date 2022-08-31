<Head title="Graphics" />

<H1>Graphics</H1>

<section class="section grid gap-y-8 gap-x-12 items-center <md:px-0">
	{#each graphics as graphic}
		<figure class="flex flex-col text-center">
			<a
				class="chiseled highlight m-auto"
				href={urlFor(graphic.image).auto('format').url()}
				target="_blank"
			>
				<Img image={graphic.image} h={600} />
			</a>

			<figcaption class="mt-4 px-4">
				<p class="font-bold">{graphic.description}</p>

				{#if graphic.date}
					<p><Date date={graphic.date} /></p>
				{/if}
			</figcaption>
		</figure>
	{/each}
</section>

<style>
	@screen md {
		section {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}
</style>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import Img from '$lib/Img.svelte'
	import Date from '$lib/Date.svelte'
	import { urlFor } from '$utils/sanity'
	import { page } from '$app/stores'

	const { graphics } = $page.data.sanity
</script>
