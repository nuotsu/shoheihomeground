<p class="mt-8 text-center text-ink/50">
	Showing top {Math.min(filtered.length, $max)} results
</p>

<div class="<md:full-width mt-4">
	{#each filtered.slice(0, $max) as image (image._key)}
		<PhotosetMini {...image} />
	{/each}

	{#if $max < filtered.length}
		<button class="hover:bg-ink/5 aspect-square" on:click={() => $max += (MAX_INC + 1)}>
			View more +
		</button>
	{/if}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
		gap: 1px;
	}
</style>

<script>
	import PhotosetMini from './PhotosetMini.svelte'

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
		.filter(p => !$featured || p.featured === $featured)

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

	export const featured = writable(false)

	export const selected_categories = writable([])
	export const selected_dates = writable([])

	export const available_categories = writable([])
	export const available_dates = writable([])

	export const MAX_INC = 31
	export const max = writable(MAX_INC)
</script>
