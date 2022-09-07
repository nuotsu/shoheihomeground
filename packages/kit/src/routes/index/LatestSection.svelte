<section class="section">
	<H2 link={{ url: '/latest' }}>
		<a class="link-hover" href="/latest">
			Latest
		</a>

		<a class="link-hover" href="/{date}" slot="sub">
			<Date {date} />
		</a>
	</H2>

	<ul class="carousel mt-4 <xl:full-width <xl:px-4">
		{#each photos as { photos, thumbnail }, i}
			<li
				class="chiseled anim-fade"
				style:min-width="{size}px"
				style:--delay={i / 25}
			>
				<a class="highlight" href="/{date}">
					<Img image={photos[thumbnail-1]} w={size * 1.5} />
				</a>
			</li>
		{/each}
	</ul>
</section>

<script>
	import H2 from '$lib/H2.svelte'
	import { page } from '$app/stores'
	import Date from '$lib/Date.svelte'
	import Img from '$lib/Img.svelte'

	const size = 150

	// ignore giveaway only photos
	const { date, categories } = $page.data.sanity.photos.filter(p => !(
		p.categories.length === 1 &&
		p.categories.map(c => c.category.name).includes('Giveaway')
	))[0]

	const photos = categories
		.flatMap(c => c.photosets)
		.slice(0, 8)
</script>
