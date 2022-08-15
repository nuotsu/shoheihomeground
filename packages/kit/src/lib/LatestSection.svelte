<section class="section">
	<H2 link={{ url: '/latest' }}>
		Latest
		<time slot="sub" datetime={latest.date}>{format(latest.date)}</time>
	</H2>

	<ul class="flex gap-4 items-center mt-4 overflow-x-auto <xl:full-width <xl:px-4 scroll-snap">
		<!-- {#each photos as { photos, thumbnail }}
			<li style:min-width="{size}px">
				<a href="/{latest.date}/{category}/{photoset}">
					<Image {...image} w={size * 1.5} />
				</a>
			</li>
		{/each} -->
	</ul>
</section>

<script>
	import H2 from '$lib/H2.svelte'
	import { page } from '$app/stores'
	import { format } from '$lib/Date.svelte'
	import sortBy from '$utils/sortBy'

	const size = 200

	const { photos: [latest] } = $page.stuff.sanity

	console.log(latest)

	// let entries = Object.entries(byDate[latest])
	// let thumbnails = entries
	// 	.flatMap(([category, photosets]) => Object.entries(photosets)
	// 		.map(([photoset, { thumbnail, images }]) =>
	// 			({ category, photoset, image: sortBy(images, 'public_id')[thumbnail] })
	// 		)
	// 	)
	// let images = entries
	// 	.flatMap(([category, photosets]) => Object.entries(photosets)
	// 		.flatMap(([photoset, { images }]) => Object.values(images)
	// 			.flatMap(image => ({ category, photoset, image }))
	// 		)
	// 	)

	// let set = thumbnails.length >= 10
	// 	? thumbnails
	// 	: images
</script>
