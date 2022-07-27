<ul class="root">
	<li>
		<p><a href="/latest">Latest</a></p>
		<ul>
			{#each dates as date}
				<li><a href="/{date}">{day(date)}</a></li>
			{/each}
		</ul>
	</li>

	<li>
		<p><a href="/#categories">Categories</a></p>
		<ul>
			{#each Object.entries(categories) as [code, name]}
				<li><a href="/{code}">{name}</a></li>
			{/each}
		</ul>
	</li>

	<li><a href="/#graphics">Graphics</a></li>
	<li>About</li>
</ul>

<style>
	.root {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>

<script>
	import byDate from '$data/images-by-date.json'
	import { day } from '$utils'
	import categories from '$lib/categories'

	const dates = Object.keys(byDate).slice(0,5)
</script>
