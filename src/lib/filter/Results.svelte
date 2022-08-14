<div>
	{#each filtered as image}
		<Image {...image} w={300} h={300} />
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 1px;
	}

	div:empty::before {
		content: 'No results...';
	}
</style>

<script>
	import byDate from '$data/images-by-date.json'
	import { selected_dates, selected_categories } from './Filter.svelte'
	import Image from '$lib/Image.svelte'

	$: filtered = Object.entries(byDate)
		// filter by selected date
		.filter(([date]) => !$selected_dates.length || $selected_dates.includes(date))
		// filter by selected category
		.filter(([date, categories]) => !$selected_categories.length || Object.keys(categories).some(code => $selected_categories.includes(code)))
		// map to photosets
		.flatMap(([date, categories]) => {
			$available_dates = [...$available_dates, date]
			$available_categories = [...$available_categories, ...Object.keys(categories)]
			return Object.values(categories)
		})
		.flatMap(photoset => Object.values(photoset))
		.flatMap(photoset => photoset.images)
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const available_dates = writable([])
	export const available_categories = writable([])
</script>
