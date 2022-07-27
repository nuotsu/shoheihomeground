<div>
	<a href="/#stats-updates">Stats & Updates</a>

	<Menu title="Latest">
		<ul>
			{#each dates as date}
				<li><a href="/{date}">{day(date)}</a></li>
			{/each}
		</ul>
	</Menu>

	<Menu title="Categories">
		<ul>
			{#each Object.entries(categories) as [code, name]}
				<li><a href="/{code}">{name}</a></li>
			{/each}
		</ul>
	</Menu>

	<a href="#graphics">Graphics</a>

	About
</div>

<style>
	div {
		display: flex;
		gap: 1rem;
	}
</style>

<script>
	import Menu from './Menu.svelte'
	import byDate from '$data/images-by-date.json'
	import { day } from '$utils'
	import categories from '$lib/categories'

	const dates = Object.keys(byDate).slice(0,5)
</script>
