<details open>
	<summary class="max-w-max">
		<h2 class="h2 with-icon">
			Filter photos
			<Right/>
		</h2>
	</summary>

	<form bind:this={form} class="flex flex-wrap gap-y-4 gap-x-12 mt-4" on:change={onChange}>
		<Fieldset title="Tags">
			<Filter name="featured" bind:checked={$featured}>&star; Featured</Filter>
			<Filter name="shuffled" bind:checked={$shuffled}>Shuffled</Filter>
		</Fieldset>

		<Fieldset title="By category" contentClass="columns-2 gap-8">
			{#each categories as { code, name }}
				{@const disabled = !$available_categories.includes(code)}

				<Filter name="categories" value={code} {disabled}>
					{name}
				</Filter>
			{/each}
		</Fieldset>

		<Fieldset title="By date" className="grow" contentClass="dates">
			{#each dates as date}
				{@const disabled = $available_dates.includes(date)}

				<Filter name="dates" value={date} {disabled}>
					{format(date)}
				</Filter>
			{/each}
		</Fieldset>
	</form>
</details>

<style>
	summary :global(svg) {
		display: block;
		@apply transition-transform;
	}

	details[open] :global(svg) {
		transform: rotate(90deg);
	}

	details[open] form {
		animation: open 0.15s ease-in-out forwards;
	}

	@keyframes open {
		from {
			opacity: 0;
			transform: translateY(-1rem);
		}
	}

	form :global(.dates) {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(12ch, 1fr));
		gap: 0 2rem;
	}
</style>

<script>
	import Right from '$icon/Right.svelte'
	import Fieldset from './Fieldset.svelte'
	import Filter from './Filter.svelte'
	import { format } from '$lib/Date.svelte'
	import {
		featured, shuffled,
		selected_categories, selected_dates,
		available_categories, available_dates,
		max, MAX_INC
	} from './Results.svelte'
	import { onMount } from 'svelte'
	import { page } from '$app/stores'

	const { categories, photos } = $page.data.sanity
	const dates = photos.map(p => p.date)

	$selected_categories = ''
	$selected_dates = ''

	let form

	function onChange() {
		const formData = new FormData(form)

		$selected_categories = formData.getAll('categories')
		$selected_dates = formData.getAll('dates')

		sessionStorage.setItem('selected_categories', $selected_categories)
		sessionStorage.setItem('selected_dates', $selected_dates)

		$max = MAX_INC
	}


	onMount(() => {
		const stored_categories = sessionStorage.getItem('selected_categories')?.split(',') || []
		const stored_dates = sessionStorage.getItem('selected_dates')?.split(',') || []

		stored_categories.forEach(category => {
			const input = form.querySelector(`input[value="${ category }"]`)
			if (input) input.checked = true
		})

		stored_dates.forEach(date => {
			const input = form.querySelector(`input[value="${ date }"]`)
			if (input) input.checked = true
		})

		onChange()
	})
</script>
