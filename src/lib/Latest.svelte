<section class="debug">
	<h2>
		Latest
		<time datetime={latest}>{day(latest)}</time>
	</h2>

	<a class="link" href="/latest">View latest</a>

	<ul>
		{#each set.slice(0,10) as image}
			<li>
				<a class="link" href={cdn(image.public_id)} target="_blank" rel="noopener">
					{image.public_id}
				</a>
			</li>
		{/each}
	</ul>
</section>

<script>
	import byDate from '$data/images-by-date.json'
	import { day } from '$utils'
	import { cdn } from '$lib/Image.svelte'

	const latest = Object.keys(byDate)[0]

	const values = Object.values(byDate['2022-06-29'])
	const thumbnails = values.flatMap(v => Object.values(v))
	const images = thumbnails.flatMap(v => v.images)

	const set = thumbnails.length >= 10
		? thumbnails.map(({ thumbnail, images }) => images[thumbnail])
		: images
</script>
