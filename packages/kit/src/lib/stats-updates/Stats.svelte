<article class="p-4 bg-white">
	<H2>Stats</H2>

	{#each Object.entries(set) as [title, keys], index}
		<table class="w-full text-center mt-4">
			<caption>{title} stats</caption>
			<tr>
				{#each keys as stat}
					<th>{stat.toUpperCase()}</th>
				{/each}
			</tr>
			<tr>
				{#each keys as stat}
					<td>{stats[index][stat]}</td>
				{/each}
			</tr>
		</table>
	{/each}
</article>

<style>
	th { font-weight: normal; }
	td { font-weight: bold; }
</style>

<script>
	import H2 from '$lib/H2.svelte'
	import { page } from '$app/stores'

	const set = {
		'Hitting': ['avg', 'obp', 'slg', 'r', 'd', 't', 'hr', 'rbi', 'sb'],
		'Pitching': ['era', 'so', 'w', 'l', 'ip', 'whip']
	}

	const stats = $page.data.stats[2022]['R']
</script>
