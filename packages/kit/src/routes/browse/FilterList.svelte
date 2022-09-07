<details open>
	<summary class="max-w-max">
		<h2 class="h2 with-icon">
			Filter photos
			<Right/>
		</h2>
	</summary>

	<form bind:this={form} class="flex flex-wrap gap-y-4 gap-x-12 mt-4" on:change={onChange}>
		<fieldset>
			<legend class="font-bold">By category</legend>

			<div class="columns-2 gap-8">
				<label>
					<input name="featured" bind:checked={$featured} type="checkbox" />
					&star; Featured
				</label>

				{#each categories as { code, name }}
					{@const disabled = !$available_categories.includes(code)}

					<label class:disabled>
						<input name="categories" value={code} type="checkbox" {disabled} />
						{name}
					</label>
				{/each}
			</div>
		</fieldset>

		<fieldset class="grow">
			<legend class="font-bold">By date</legend>
			<div class="dates">
				{#each dates as date}
					{@const disabled = $available_dates.includes(date)}

					<label class:disabled>
						<input name="dates" value={date} checked={false} type="checkbox" {disabled} />
						{format(date)}
					</label>
				{/each}
			</div>
		</fieldset>
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

	label {
		user-select: none;
		display: flex;
		align-items: center;
		gap: 0.5ch;
	}

	.disabled {
		text-decoration: line-through;
		@apply text-ink/50;
	}

	.dates {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(12ch, 1fr));
		gap: 0 2rem;
	}
</style>

<script>
	import Right from '$icon/Right.svelte'
	import { format } from '$lib/Date.svelte'
	import { page } from '$app/stores'
	import {
		featured,
		selected_categories, selected_dates,
		available_categories, available_dates,
		max, MAX_INC
	} from './Results.svelte'
	import { onMount } from 'svelte'

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
