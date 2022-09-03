<article class="grid gap-2 p-4 bg-ink text-white dots moving min-w-0 chiseled">
	<H2 live>Shohei Stats</H2>

	{#each Object.entries(set) as [title, keys], index}
		<article class="min-w-0 text-center">
			<h3 class="">{title} stats</h3>

			<div class="relative">
				<div class="overflow-x-auto max-w-max mx-auto">
					<table class="w-full">
						<tr>
							{#each keys as stat}
								<th>
									{#if stat === 'd'}
										2B
									{:else if stat === 't'}
										3B
									{:else}
										{stat.toUpperCase()}
									{/if}
								</th>
							{/each}
						</tr>
						<tr>
							{#each keys as stat}
								<td>{stats[index][stat]}</td>
							{/each}
						</tr>
					</table>
				</div>
			</div>
		</article>
	{/each}
</article>

<style>
	th { font-weight: normal; }
	td { font-weight: bold; }

	th, td {
		padding-inline: 1ch;
	}

	.relative::before,
	.relative::after {
		content: '';
		pointer-events: none;
		position: absolute;
		inset: 0;
		width: 1rem;

		@apply from-ink to-transparent;
	}

	.relative::before {
		right: auto;
		@apply bg-gradient-to-r;
	}
	.relative::after {
		left: auto;
		@apply bg-gradient-to-l;
	}
</style>

<script>
	import H2 from '$lib/H2.svelte'
	import { page } from '$app/stores'

	const set = {
		'Hitting': ['avg', 'obp', 'slg', 'r', 'h', 'd', 't', 'hr', 'rbi', 'sb'],
		'Pitching': ['era', 'so', 'w', 'l', 'ip', 'whip']
	}

	const stats = $page.data.stats[2022]['R']
</script>
