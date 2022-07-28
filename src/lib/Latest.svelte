<section class="section">
	<H2 link={{ url: '/latest' }}>
		Latest
		<time slot="sub" datetime={latest}>{day(latest)}</time>
	</H2>

	<ul class="<lg:full-width <lg:px-4 scroll-snap">
		{#each set.slice(0, 8) as {category, photoset, image}}
			<li style:min-width="{size}px">
				<a href="/{latest}/{category}/{photoset}">
					<Image {...image} w={size * 1.5} />
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
		overflow-x: auto;
	}
</style>

<script>
	import H2 from '$lib/H2.svelte'
	import byDate from '$data/images-by-date.json'
	import { day } from '$lib/Date.svelte'
	import { sortBy } from '$utils'
	import Image from '$lib/Image.svelte'

	let size = 200
	let latest = Object.keys(byDate)[0]

	let entries = Object.entries(byDate[latest])
	let thumbnails = entries
		.flatMap(([category, photosets]) => Object.entries(photosets)
			.map(([photoset, { thumbnail, images }]) =>
				({ category, photoset, image: sortBy(images, 'public_id')[thumbnail] })
			)
		)
	let images = entries
		.flatMap(([category, photosets]) => Object.entries(photosets)
			.flatMap(([photoset, { images }]) => Object.values(images)
				.flatMap(image => ({ category, photoset, image }))
			)
		)

	let set = thumbnails.length >= 10
		? thumbnails
		: images
</script>
