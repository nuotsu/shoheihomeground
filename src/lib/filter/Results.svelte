<div class="mt-8 <xl:full-width">
	{#each allImages as { date, category, thumbnail, images }}
		{@const hidden_dates = !!$selected_dates.length && !$selected_dates.includes(date)}
		{@const hidden_categories = !!$selected_categories.length && !$selected_categories.includes(category)}

		<figure hidden={hidden_dates || hidden_categories}>
			<Image {...images[thumbnail]} w={300} h={300} />
		</figure>
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 1px;
	}
</style>

<script>
	import byDate from '$data/images-by-date.json'
	import { selected_dates, selected_categories } from './Filter.svelte'
	import Image from '$lib/Image.svelte'

	$: allImages = Object.entries(byDate)
		.flatMap(([date, categories]) =>
			Object.entries(categories).flatMap(([category, photosets]) =>
				Object.values(photosets).map(photoset => ({ date, category, ...photoset }))
			)
		)

	$: $available_dates = allImages
		.filter(i => !$selected_categories.length || $selected_categories.includes(i.category))
		.map(i => i.date)

	$: $available_categories = allImages
		.filter(i => !$selected_dates.length || $selected_dates.includes(i.date))
		.map(i => i.category)
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const available_dates = writable([])
	export const available_categories = writable([])
</script>
