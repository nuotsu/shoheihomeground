<details open>
	<summary>
		<h2 class="h2">Filter photos</h2>
	</summary>

	<form class="flex gap-4" on:change={onChange}>
		<fieldset>
			<legend>By date</legend>

			{#each Object.keys(byDate) as date}
				<label class:disabled={!$available_dates.includes(date)}>
					<input name="dates" value={date} type="checkbox" disabled={!$available_dates.includes(date)}>
					{date}
				</label>
			{/each}
		</fieldset>

		<fieldset>
			<legend>By category</legend>

			{#each Object.entries(categories) as [code, name]}
				<label class:disabled={!$available_categories.includes(code)}>
					<input name="categories" value={code} type="checkbox" disabled={!$available_categories.includes(code)}>
					{name}
				</label>
			{/each}
		</fieldset>
	</form>
</details>

<style>
	label {
		display: block;
	}

	label.disabled {
		@apply text-ink/30 line-through;
	}
</style>

<script>
	import byDate from '$data/images-by-date.json'
	import categories from '$lib/categories'
	import { available_dates, available_categories } from './Results.svelte'

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
