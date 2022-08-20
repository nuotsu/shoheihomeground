<div class="<md:full-width mt-4">
	{#each filtered as { date, c, photos, thumbnail, set, _key } (_key)}
		{@const image = photos[thumbnail-1]}

		{#if !!image?.asset}
			<a href="/{date}/{c}/{num(set)}">
				<Img image={photos[thumbnail-1]} w={300} h={300} />
			</a>
		{/if}
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
		gap: 1px;
	}
</style>

<script>
	import Img from '$lib/Img.svelte'
	import { num } from '$lib/Set.svelte'

	export let photos, points

	$: filtered = photos
		.filter(({ date }) => !$selected_dates.length || $selected_dates.includes(date))
		.flatMap(p => p.categories
			.filter(({ category }) => !$selected_categories.length || $selected_categories.includes(category.code))
			.flatMap(({ photosets }) => photosets
				.map((p, set) => {
					p.set = set
					return p
				})
			)
		)

	$: $available_dates = points
		.filter(({ categories }) => $selected_categories.length && categories.every(c => !$selected_categories.includes(c)))
		.map(p => p.date)

	$: $available_categories = [...new Set(points
		.filter(({ date }) => !$selected_dates.length || $selected_dates.includes(date))
		.flatMap(p => p.categories)
	)]
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const selected_categories = writable([])
	export const selected_dates = writable([])

	export const available_categories = writable([])
	export const available_dates = writable([])
</script>
