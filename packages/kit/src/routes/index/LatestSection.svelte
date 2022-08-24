<section class="section">
	<H2 link={{ url: '/latest' }}>
		Latest
		<time slot="sub" datetime={date}>{format(date)}</time>
	</H2>

	<ul class="flex gap-4 items-center mt-4 overflow-x-auto <xl:full-width <xl:px-4 scroll-snap">
		{#each photos as { photos, thumbnail }}
			<li class="chiseled" style:min-width="{size}px">
				<a class="highlight-hover" href="/{date}">
					<Img image={photos[thumbnail-1]} w={size * 1.5} />
				</a>
			</li>
		{/each}
	</ul>
</section>

<script>
	import H2 from '$lib/H2.svelte'
	import { page } from '$app/stores'
	import { format } from '$lib/Date.svelte'
	import Img from '$lib/Img.svelte'

	const size = 150

	const { date, categories } = $page.data.sanity.photos[0]

	const photos = categories
		.flatMap(c => c.photosets)
		.slice(0, 8)
</script>
