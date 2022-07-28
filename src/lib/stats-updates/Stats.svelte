<article>
	<H2>Stats</H2>

	{#each Object.entries(set) as [title, keys], index}
		<table>
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
	article {
		padding: 1rem;

		@apply bg-white;
	}

	table {
		width: 100%;
		text-align: center;
	}
</style>

<script>
	import H2 from '$lib/H2.svelte'
	import { page } from '$app/stores'

	const set = {
		'Hitting': ['avg', 'obp', 'slg', 'r', 'd', 't', 'hr', 'rbi', 'sb'],
		'Pitching': ['era', 'so', 'w', 'l', 'ip', 'whip']
	}

	const stats = $page.stuff.stats[2022]['R']
</script>
