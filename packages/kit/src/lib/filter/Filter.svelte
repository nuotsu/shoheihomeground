<details open>
	<summary class="max-w-max">
		<h2 class="h2 with-icon">
			Filter photos
			<Right/>
		</h2>
	</summary>

	<form class="flex gap-8 mt-4" on:change={onChange}>
		<Fieldset title="By category">
			{#each categories as { code, name }}
				{@const disabled = !$available_categories.includes(code)}
				<label class:disabled>
					<input name="categories" value={code} type="checkbox" checked={false} {disabled}>
					{name}
				</label>
			{/each}
		</Fieldset>

		<Fieldset title="By date">
			{#each Object.keys(byDate) as date}
				{@const disabled = !$available_dates.includes(date)}
				<label class:disabled>
					<input name="dates" value={date} type="checkbox" checked={false} {disabled}>
					{format_v1(date)}
				</label>
			{/each}
		</Fieldset>
	</form>
</details>

<style>
	:global(svg) {
		@apply transition-transform;
	}

	details[open] h2 :global(svg) {
		@apply rotate-90;
	}

	label {
		display: block;
	}

	label.disabled {
		@apply text-ink/30 line-through;
	}
</style>

<script>
	import byDate from '$data/images-by-date.json'
	import { page } from '$app/stores'
	import { available_dates, available_categories } from './Results.svelte'
	import Right from '$icon/Right.svelte'
	import Fieldset from './Fieldset.svelte'
	import { format_v1 } from '$lib/Date.svelte'

	const { categories } = $page.data.sanity

	function onChange({ target }) {
		let formData = new FormData(target.form)
		$available_dates = []
		$available_categories = []
		$selected_dates = formData.getAll('dates')
		$selected_categories = formData.getAll('categories')
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const selected_dates = writable([])
	export const selected_categories = writable([])
</script>
