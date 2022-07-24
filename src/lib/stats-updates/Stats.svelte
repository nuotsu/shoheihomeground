<article>
	<h2>Stats</h2>

	{#each set as keys, index}
		<table>
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
	table {
		text-align: center;
	}
</style>

<script>
	import { page } from '$app/stores'

	const set = [
		['avg', 'obp', 'slg', 'r', 'd', 't', 'hr', 'rbi', 'sb'],
		['era', 'so', 'w', 'l', 'ip', 'whip']
	]

	const stats = $page.stuff.stats[2022]['R']
</script>
