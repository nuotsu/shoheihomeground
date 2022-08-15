<details open class="<md:px-4" style:--offset="0.5rem">
	<summary>
		<h2 class="h2 with-icon">
			Filter photos
			<Right/>
		</h2>
	</summary>

	<form class="flex gap-4 mt-4" on:change={onChange}>
		<fieldset>
			<legend>By category</legend>

			<div class="md:columns-2 gap-4">
				{#each Object.entries(categories) as [code, name]}
					<!-- {@const disabled = !$selected_categories.length && !$available_categories.includes(code)} -->
					{@const disabled = false}
					<label class:disabled>
						<input name="categories" value={code} type="checkbox" checked={false} {disabled}>
						{name}
					</label>
				{/each}
			</div>
		</fieldset>

		<fieldset>
			<legend>By date</legend>

			<div class="md:columns-2 gap-4">
				{#each Object.keys(byDate) as date}
					<!-- {@const disabled = !($selected_dates.length || $available_dates.includes(date))} -->
					{@const disabled = false}
					<label class:disabled>
						<input name="dates" value={date} type="checkbox" checked={false} {disabled}>
						{format(date)}
					</label>
				{/each}
			</div>
		</fieldset>
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

	legend {
		font-weight: bold;
	}
</style>

<script>
	import byDate from '$data/images-by-date.json'
	import categories from '$lib/categories'
	import { available_dates, available_categories } from './Results.svelte'
	import Right from '$icon/Right.svelte'
	import { format } from '$lib/Date.svelte'

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
