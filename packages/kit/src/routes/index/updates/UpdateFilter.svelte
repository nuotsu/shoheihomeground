<select class="select text-center <md:ml-auto" bind:value={$type}>
	<option value="">All</option>
	{#each types as type}
		{#if type == 'photos'}
			<option value={type}>Photos</option>
		{:else if type == 'graphic'}
			<option value={type}>Graphics</option>
		{:else}
			<option value={type}>Other</option>
		{/if}
	{/each}
</select>

<script>
	import { page } from '$app/stores'

	const { updates } = $page.data

	const types = [...new Set(updates.map(u => u.type?._type || 'custom'))]
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const type = writable('')
</script>
