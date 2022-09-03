<article class="p-4 bg-white chiseled">
	<header class="flex flex-wrap items-center justify-between gap-x-4">
		<h2 class="h2 live-badge">
			Updates
		</h2>

		<UpdateFilter />
	</header>

	<ul class="mt-4 max-h-[9.5em] <md:max-h-[12em] overflow-y-auto">
		{#each filtered as update}
			<Update {...update} />
		{/each}
	</ul>
</article>

<script>
	import UpdateFilter, { type } from './UpdateFilter.svelte'
	import Update from './Update.svelte'
	import { page } from '$app/stores'

	const { updates } = $page.data

	$: filtered = updates.filter(u => !$type || u.type._type === $type)
</script>
